import gsap from "gsap";

export const getLoaderTimelines = (setCounter) => {
    let counterObj = { rotation: 0 };
    let TL1 = gsap.timeline();
    TL1.fromTo(
        ".loader_cover",
        {
            top: 0,
            height: "100%",
        },
        {
            height: "3px",
            top: "50%",
            transformOrigin: "50% 50%",
            duration: 0.5,
        }
    )
        .fromTo(
            [".loader_img", ".loader_counter"],
            {
                scale: 0,
                opacity: 0,
            },
            {
                scale: 1,
                opacity: 1,
                duration: 0.5,
            }
        )
        .to(
            counterObj,
            {
                duration: 1.5,
                rotation: 100,
                onUpdate: () => {
                    setCounter(counterObj.rotation);
                },
            },
            "-=0.5"
        )
        .to(".loader_img", { top: "22px", width: "20px", duration: 0.5 }, "-=0.5")
        .to(".loader_cover", { top: "58px", duration: 0.5 }, "-=0.5")
        .to(".loader_counter", { top: "25%", duration: 0.5 }, "-=0.5")
        .to(".loader_img", { left: "0rem", opacity: 0, duration: 1 })
        .to(".loader_counter", { opacity: 0, scale: 0 }, "-=1")
        .fromTo(".header", { opacity: 0 }, { opacity: 1, duration: 1, stagger: 1 }, "-=1")
        .to(".loader_cover", { width: 0, duration: 1.5, delay: 0.5 }, "-=1")
        .fromTo(".app", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1.5")
        .to(".loader_container", { visibility: "hidden" })
}