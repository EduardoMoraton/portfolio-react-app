export const scrollTo = (id) => {
    const aboutSection = document.getElementById(id);
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };