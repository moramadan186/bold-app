import gsap from "gsap";

export const getCardTimelines = (cards, index) => {
    //image and content timeline
    let TL1 = gsap.timeline({
        scrollTrigger: {
            trigger: cards[index],
            start: "top center+=150",
            end: "top 50%",
        },
    });

    TL1.fromTo(
        cards[index].querySelector("div.image_wrapper"),
        {
            scaleX: 0,
            scaleY: 0.01,
        },
        {
            scaleX: 1,
            scaleY: 0.01,
            transformOrigin: "50% 50%",
            duration: 0.5,
        }
    )
        .fromTo(
            cards[index].querySelector("div.image_wrapper"),
            {
                scaleY: 0.01,
            },
            {
                scaleY: 1,
                transformOrigin: "50% 50%",
                duration: 0.5,
            }
        )
        .fromTo(
            cards[index].querySelector("div.image_wrapper > .image_cover"),
            {
                opacity: 1,
            },
            {
                opacity: 0,
                duration: 0.3,
            }
        )
        .fromTo(
            cards[index].querySelectorAll("div.card_info > *"),
            {
                opacity: 0,
                x: 10,
                y: 20,
            },
            {
                opacity: 1,
                x: 0,
                y: 0,
                duration: 0.3,
                stagger: 0.1,
            }
        );

    //border timeline
    let TL2 = gsap.timeline({
        defaults: { duration: 0.7 },
        delay: 0.5,
        scrollTrigger: {
            trigger: cards[index],
            start: "top center+=150",
            end: "top 50%",
        },
    });
    TL2.fromTo(
        cards[index].querySelector(".line1"),
        { height: "0" },
        { height: "100%" }
    )
        .fromTo(
            cards[index].querySelector(".line2"),
            { width: "0" },
            { width: "100%" }
        )
        .fromTo(
            cards[index].querySelector(".line3"),
            { height: "0" },
            { height: "100%" }
        )
        .fromTo(
            cards[index].querySelector(".line4"),
            { width: "0" },
            { width: "100%" }
        );

    gsap.fromTo(".load_more", {
        opacity: 0,
        x: 10,
        y: 25,
    }, {
        opacity: 1,
        x: 0,
        y: 0,
        duration: 0.5,
        scrollTrigger: {
            trigger: ".load_more",
            start: "top center+=150",
            end: "top 50%",
        },
    })
}
