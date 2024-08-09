function ProjectTecks({ project }) {
    return (
        <>
            <h5>
                <span className="text-colorDefault font-body font-bold sm:text-[16px] md:text-[18px]">
                    Tecks:
                </span>
                <span className="text-colorDefault px-1 font-body font-light sm:text-[16px] md:text-[18px]">
                    {project.tecks}
                </span>
            </h5>
        </>
    );
}

export default ProjectTecks;
