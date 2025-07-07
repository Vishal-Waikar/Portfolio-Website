// export const useScrollAnimation = () => {
//     const setupIntersectionObserver = () => {
//       // Create an intersection observer instance
//       const observer = new IntersectionObserver(
//         (entries) => {
//           entries.forEach((entry) => {
//             // If the element is in viewport
//             if (entry.isIntersecting) {
//               entry.target.classList.add("visible");
//             }
//           });
//         },
//         {
//           root: null, // Use the viewport as the root
//           threshold: 0.1, // Trigger when at least 10% of the target is visible
//           rootMargin: "0px 0px -100px 0px" // Adjust based on when you want the animation to trigger
//         }
//       );
  
//       // Select all elements with the animate-on-scroll class
//       const elements = document.querySelectorAll(".animate-on-scroll");
      
//       // Observe each element
//       elements.forEach((element) => {
//         observer.observe(element);
//       });
  
//       // Return a cleanup function
//       return () => {
//         elements.forEach((element) => {
//           observer.unobserve(element);
//         });
//       };
//     };
  
//     return {
//       setupIntersectionObserver
//     };
//   };
  
export const useScrollAnimation = () => {
  const setupIntersectionObserver = () => {
    // Create an intersection observer instance
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      {
        root: null, // Use the viewport as the root
        threshold: 0.1, // Trigger when at least 10% of the target is visible
        rootMargin: "0px 0px -100px 0px", // Adjust based on when you want the animation to trigger
      }
    );

    // Select all elements with the animate-on-scroll class
    const elements = document.querySelectorAll(".animate-on-scroll");
    
    // Observe each element
    elements.forEach((element) => {
      observer.observe(element);
    });

    // Return a cleanup function
    return () => {
      elements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  };

  return {
    setupIntersectionObserver,
  };
};
