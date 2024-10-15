
import Header from "../components/common/Header";
import CartQuestion from "../components/QuestionAndAnswer/CartQuestion";

export default function Questionswer() {
    const News = [
        {
            title: "How These Principals Got Creative to Recruit STEM Teachers",
            discription:
                "STEM fields are in high demand, and that creates a tangle of problems for schools. Students want courses in STEM subjects and companies and government agencies want graduates coming out of high school and college with strong foundations in STEM areas.",
            image: "../../../../public/img/imgcartone.png",
            date: "September 20, 2024",
            auther: "BY Arianna Prothero",
            link: "https://www.edweek.org/leadership/how-these-principals-got-creative-to-recruit-stem-teachers/2024/09",
        },
        {
            title: "How This District Lowered Its Teacher Vacancy Rate to Almost Zero",
            discription:
                "No district wants to start the school year with teacher vacancies. But across the nation, they’ve become not just a concern, but an accepted reality. A team of researchers that tracks national data on teacher shortages last fall reported 55,000 such vacancies, up from 36,000 the prior year ",
            image: "../../../../public/img/imgcarttwo.png",
            date: "September 10, 2024",
            auther: "By Elizabeth Heubeck",
            link: "https://www.edweek.org/leadership/how-this-district-lowered-its-teacher-vacancy-rate-to-almost-zero/2024/09",
        },
        {
            title: "Don’t Buy the AI Hype, Learning Expert Warns",
            discription:
                "Generative artificial intelligence can save educators time, help personalize learning, and potentially close achievement gaps. That’s what artificial intelligence experts have said when they talk about the technology’s potential to transform education.",
            image: "../../../../public/img/imgcartthree.png",
            date: "August 07, 2024",
            auther: "By Lauraine Langreo",
            link: "https://www.edweek.org/technology/dont-buy-the-ai-hype-learning-expert-warns/2024/08",
        },
        {
            title: "Fractions Are Tough to Teach and to Learn. These Strategies Can Help",
            discription:
                "Fractions are a foundational piece for tackling mathematics at all levels of schooling. Students need to understand how two numbers interact with each other as numerators and denominators, as ratios, and as proportions before they move on to more advanced math.",
            image: "../../../../public/img/imgcartfour.png",
            date: "October 07, 2024",
            auther: "By Olina Banerji",
            link: "https://www.edweek.org/teaching-learning/fractions-are-tough-to-teach-and-to-learn-these-strategies-can-help/2024/10",
        },
        {
            title: "Why Are Advanced Placement Scores Suddenly So High?",
            discription:
                "n the past few months, a lot of attention has been paid to the spike in some Advanced Placement exam results. EdWeek’s Ileana Najarro reported in August that these increased passing rates have “led some educators and researchers to question whether AP exams have become easier” or if the College Board (which runs the AP) is boosting passing rates “to compete against dual-credit programs.” As one would expect, the College Board says that’s not the case. But I was interested to hear more about what the College Board says is going on, ",
            image: "../../../../public/img/imgcartfive.png",
            date: " October 08, 2024 ",
            auther: "By Rick Hess",
            link: "https://www.edweek.org/teaching-learning/opinion-why-are-advanced-placement-scores-suddenly-so-high/2024/10",
        },
        {
            title: "Math Fluency Is All About Problem-Solving. Do We Teach It That Way?",
            discription:
                "To learn math, students must build a mental toolbox of facts and procedures needed for different problems. But students who can recall these foundational facts in isolation often struggle to use them flexibly to solve complex, real-world problems, known as procedural fluency.",
            image: "../../../../public/img/imgcartsex.png",
            date: " September 25, 2024",
            auther: "By Sarah D. Sparks ",
            link: "https://www.edweek.org/teaching-learning/a-job-in-the-white-house-didnt-prepare-this-teacher-for-returning-to-the-classroom/2024/09",
        },
        {
            title: "A Job in the White House Didn’t Prepare This Teacher for Returning to the Classroom",
            discription:
                "Recruiting and retaining strong STEM teachers is a challenge for educators, STEM professionals, and policymakers. Steve Robinson has been all three. Robinson, who is now retired, started his career in academia where he served as an assistant professor of biology at the University of Massachusetts, running a research lab.",
            image: "../../../../public/img/imgcartseven.png",
            date: "September 9, 2024",
            auther: "By Alyson Klein",
            link: "https://www.edweek.org/teaching-learning/a-job-in-the-white-house-didnt-prepare-this-teacher-for-returning-to-the-classroom/2024/09 ",
        },
    ];
    return (
        <div className="flex-1 relative overflow-auto z-10">
            <Header title="Q&A" />
            <main className="max-w-7xl mx-auto  py-6 px-4 lg:px-8 grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {News.map((item, index) => (
                    <CartQuestion
                        key={index}
                        title={item.title}
                        discription={item.discription}
                        image={item.image}
                        date={item.date}
                        auther={item.auther}
                        link={item.link}
                    />
                ))}
            </main>
        </div>
    );
}
