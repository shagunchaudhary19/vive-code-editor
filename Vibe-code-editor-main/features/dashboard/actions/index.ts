"use server";
import { currentUser } from "@/features/auth/actions";
import { db } from "@/lib/db";
import { Templates } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const createPlayground = async (data: {
  title: string;
  template: Templates;
  description?: string;
  userId: string;
}) => {
  const { template, title, description } = data;
  const user = await currentUser();
  try {
    const playground = await db.playground.create({
      data: {
        title,
        description,
        template,
        userId: user?.id!,
      },
    });
    return playground;
  } catch (error) {
    console.error("Error creating playground:", error);
    return null;
  }
};

export const getAllPlaygroundForUser = async () => {
  const user = await currentUser();
  try {
    const playgrounds = await db.playground.findMany({
      where: {
        userId: user?.id,
      },
      include: {
        user: true,
        Starmark: {
          where: {
            userId: user?.id,
          },
          select: {
            isMarked: true,
          },
        },
      },
    });
    return playgrounds;
  } catch (error) {
    console.error("Error fetching playgrounds:", error);
    return null;
  }
};
export const getPlaygroundById = async (id: string) => {
  try {
    const playground = await db.playground.findUnique({
      where: { id },
      select: {
        templateFiles: {
          select: {
            content: true,
          },
        },
      },
    });
    return playground;
  } catch (error) {
    console.log(error);
  }
};

// export const SaveUpdatedCode = async (playgroundId: string, data: TemplateFolder) => {
//   const user = await currentUser();
//   if (!user) return null;

//   try {
//     const updatedPlayground = await db.templateFile.upsert({
//       where: {
//         playgroundId, // now allowed since playgroundId is unique
//       },
//       update: {
//         content: JSON.stringify(data),
//       },
//       create: {
//         playgroundId,
//         content: JSON.stringify(data),
//       },
//     });

//     return updatedPlayground;
//   } catch (error) {
//     console.log("SaveUpdatedCode error:", error);
//     return null;
//   }
// };

export const deleteProjectById = async (id: string) => {
  try {
    await db.playground.delete({
      where: { id },
    });
    revalidatePath("/dashboard");
  } catch (error) {
    console.log(error);
  }
};

export const editProjectById = async (
  id: string,
  data: { title: string; description: string }
) => {
  try {
    await db.playground.update({
      where: { id },
      data: data,
    });
    revalidatePath("/dashboard")
  } catch (error) {
    console.log(error);
  }
};

export const duplicateProjectById = async (id: string) => {
  try {
    // Fetch the original playground data
    const originalPlayground = await db.playground.findUnique({
      where: { id },
      include: {
        templateFiles: true, // Include related template files
      },
    });

    if (!originalPlayground) {
      throw new Error("Original playground not found");
    }

    // Create a new playground with the same data but a new ID
    const duplicatedPlayground = await db.playground.create({
      data: {
        title: `${originalPlayground.title} (Copy)`,
        description: originalPlayground.description,
        template: originalPlayground.template,
        userId: originalPlayground.userId,
        templateFiles: {
          // @ts-ignore
          create: originalPlayground.templateFiles.map((file) => ({
            content: file.content,
          })),
        },
      },
    });

    // Revalidate the dashboard path to reflect the changes
    revalidatePath("/dashboard");

    return duplicatedPlayground;
  } catch (error) {
    console.error("Error duplicating project:", error);
  }
};
