import PageBanner from '@/components/PageBanner';
import React from 'react';
import aboutImg from '@/app/images/aboutus.jpg';
import project1 from '@/app/images/aboutus.jpg';
import project2 from '@/app/images/aboutus.jpg';
import project3 from '@/app/images/aboutus.jpg'; // Add your project images

import ProjectCard from '@/components/ProjectCard';

// Dummy project data
const projects = [
  {
    title: "Clean Water Initiative",
    description: "Providing clean water solutions to rural communities.",
    image: project1
  },
  {
    title: "School Construction",
    description: "Building schools in underserved areas to promote education.",
    image: project2
  },
  {
    title: "Medical Aid Project",
    description: "Delivering medical supplies and aid to remote regions.",
    image: project3
  }
];

function ProjectsPage() {
  return (
    <section>
      {/* Page Banner */}
      <PageBanner title={"Our Projects"} bannerImage={aboutImg} />

      {/* Project Gallery */}
      <div className="max-w-8xl container mx-auto py-10 px-5 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard project={project} index={index}  />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsPage;
