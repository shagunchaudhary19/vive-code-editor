"use client";

import React from "react";
import ProjectTable from "./project-table";
import {
  deleteProjectById,
  editProjectById,
  duplicateProjectById,
} from "@/features/dashboard/actions";

interface Props {
  playgrounds: any[];
}

const ProjectTableWrapper: React.FC<Props> = ({ playgrounds }) => {
  const handleDelete = async (id: string) => {
    await deleteProjectById(id); // Optional: Refresh or revalidate here
  };

  const handleUpdate = async (id: string, data: any) => {
    await editProjectById(id, data); // Optional: Refresh or revalidate here
  };

  const handleDuplicate = async (id: string) => {
    await duplicateProjectById(id); // Optional: Refresh or revalidate here
  };

  return (
    <ProjectTable
      projects={playgrounds}
      onDeleteProject={handleDelete}
      onUpdateProject={handleUpdate}
      onDuplicateProject={handleDuplicate}
    />
  );
};

export default ProjectTableWrapper;
