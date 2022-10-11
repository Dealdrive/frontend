import { createStore } from 'vuex';
import axiosClient from '../axios';

const adminnavigation = [
    { name: 'Home', to: { name: 'Adminhome' }, icon: 'fa fa-home fa-2x', color: { color: 'white' } },

    { name: 'Services', to: { name: 'Adminservices' }, icon: 'fa fa-wheelchair-alt fa-2x', color: { color: 'tomato' } },

    { name: 'About', to: { name: 'Adminabout' }, icon: 'fa fa-book fa-2x', color: { color: 'pink' } },

    { name: 'Testimonials', to: { name: 'AdminTestimonials' }, icon: 'fa fa-certificate fa-2x', color: { color: 'yellow' } },

    { name: 'Slides', to: { name: 'AdminSlides' }, icon: 'fa fa-sliders fa-2x', color: { color: 'purple' } },

    { name: 'Projects', to: { name: 'AdminProjects' }, icon: 'fa fa-archive fa-2x', color: { color: 'skyblue' } },


    { name: 'Blog', to: { name: 'AdminBlog' }, icon: 'fa fa-sliders fa-2x', color: { color: 'orange' } },

    { name: 'FAQ', to: { name: 'AdminFaq' }, icon: 'fa fa-envelope-square fa-2x', color: { color: 'green' } },

]

const slides = [{
        id: 1,
        title: 'GET MORE DONE WITH OUR SOFTWARE SOLUTIONS',
        caption: 'Accelerate your digital transformation with our branding and software development solutions',
        image: '/assets/images/hero-carousel/1.jpg'
    },
    {
        id: 2,
        title: 'Particpate in Our Training',
        caption: 'Dealdrive Technology Skillup programs is a digital skill acquisition program that train you to be master of tech related skills in the field of design, software and web application',
        image: '/assets/images/page-header.jpg'
    },
    {
        id: 3,
        title: 'GET MORE DONE WITH OUR SOFTWARE SOLUTIONS',
        caption: 'Accelerate your digital transformation with our branding and software development solutions',
        image: '/assets/images/hero-carousel/2.jpg'
    },
    {
        id: 4,
        title: 'GET MORE DONE WITH OUR SOFTWARE SOLUTIONS',
        caption: 'Accelerate your digital transformation with our branding and software development solutions',
        image: '/assets/images/hero-carousel/3.jpg'
    },
    {
        id: 5,
        title: 'GET MORE DONE WITH OUR SOFTWARE SOLUTIONS',
        caption: 'Accelerate your digital transformation with our branding and software development solutions',
        image: '/assets/images/hero-carousel/4.jpg'
    }, {
        id: 6,
        title: 'GET MORE DONE WITH OUR SOFTWARE SOLUTIONS',
        caption: 'Accelerate your digital transformation with our branding and software development solutions',
        image: '/assets/images/hero-carousel/5.jpg'
    }
];

const socials = [
    { name: 'twitter', icon: 'fab fa-twitter', profile: 'https://twitter.com/ddrivebrand' },
    { name: 'facebook', icon: 'fab fa-facebook', profile: 'https://web.facebook.com/ddrivebrand' },
    { name: 'instagram', icon: 'fab fa-instagram', profile: 'https://www.instagram.com/ddrivebrand/' },
    { name: 'linkedin', icon: 'fab fa-linkedin', profile: 'https://www.linkedin.com/in/ddrivebrand/' },
];

const contacts = { email: 'dealdrivetechnology@gmail.com', phone: '+2348061467293' };

const about = {
    id: 1,
    image: "/assets/images/about.jpg",
    heading: 'Dealdrive Technology - your one-stop shop for your digital solution',
    short_desc: 'We believe there is a software solution to every hard craked experience in a brand. What we do is to ease the experience.',
    list: [
        "We build custom applications that will optimize your daily business operations.",
        "We work with you to understand your business need and how our solution can meet the need.",
        "With our experienced team of designers and developers, we can bring your business to limelight.",
        "We provide the best value for your money; Every service you receive from us comes with a guarantee that secure your investment.",
    ]
};

const categories = [
    { name: 'Web Apps', id: 1, class: ".filter-web" },
    { name: 'Brand Designs', id: 2, class: ".filter-brand" }
];

const project_categories = [
    { name: 'Web Apps', id: 1, class: "filter-web" },
    { name: 'Brand Designs', id: 2, class: "filter-brand" }
];

const projects = [{
        id: 1,
        class: "filter-brand",
        name: "De String Electrical",
        image: "/assets/images/projects/branding/DSTRING.jpg",
        url: "#",
        desc: "They provide electrical installations and conduit wiring.",
        full_desc: {
            aim: "De String Electrical wants to create their brand identity to have a unified brand designs across all their touch points. They want a design that can connect to their audience. Most importantly, to generate more sales and grow their profit margin.",
            gap: "De String Electrical wants to create their brand identity to have a unified brand designs across all their touch points. They want a design that can connect to their audience. Most importantly, to generate more sales and grow their profit margin.",
            solution: "De String Electrical wants to create their brand identity to have a unified brand designs across all their touch points. They want a design that can connect to their audience. Most importantly, to generate more sales and grow their profit margin.",
            optimization: "De String Electrical wants to create their brand identity to have a unified brand designs across all their touch points. They want a design that can connect to their audience. Most importantly, to generate more sales and grow their profit margin.",
            result: {
                title: "De String Electrical wants to create their brand identity to have a unified brand designs across all their touch points. They want a design that can connect to their audience. Most importantly, to generate more sales and grow their profit margin.",
                data: [
                    "De String Electrical wants to create their brand identity to have a unified brand designs across all their touch points. They want a design that can connect to their audience. Most importantly, to generate more sales and grow their profit margin.",
                    "De String Electrical wants to create their brand identity to have a unified brand designs across all their touch points. They want a design that can connect to their audience. Most importantly, to generate more sales and grow their profit margin."
                ]
            }
        }
    },
    {
        id: 2,
        class: "filter-brand",
        name: "Savoury Crunches",
        image: "/assets/images/projects/branding/savoury.jpg",
        url: "#",
        desc: "They provide baking, pasteries, and catering services.",
        full_desc: {
            aim: "Savoury Crunches wants to create their brand identity to have a unified brand designs across all their touch points. They want a design that can connect to their audience. Most importantly, to generate more sales and grow their profit margin.",
            gap: "Savoury Crunches never had a brand design. Their sales and marketing campaign was barely done with any brand imagery.",
            solution: "We designed their brand identity and structured the brand awareness images. Some of our deliverables include:  logo, flyer and package label designs.",
            optimization: "We promote their brand awareness across all social media channels. Through brand designs we created their product designs that communicate what they do to their audience.",
            result: {
                title: "The results we achieved were very tremendous within the first three months.",
                data: [
                    "40% increase in sales for savoury crunches",
                    "60% increase in brand awareness for savoury crunches."
                ]
            }
        },
    },
    // web app
    {
        id: 3,
        class: "filter-web",
        name: "Reform7",
        image: "/assets/images/projects/webServices/sld1.PNG",
        url: "https://reform7international.org/",
        desc: "A NGO that provide reformation through the word of God.",
        full_desc: {
            aim: "Reform7 want to grow their ministry and NGO services. They want to bring their message to a wider audience that will contribute and benefit from it.",
            gap: "Reform7 didn’t have any website to grow their online presence. Their ministry and NGO activity didn’t reach audience who were interested to be part of.",
            solution: "We designed and built their website and hosted the website on a secured web hosting platform. Some of our deliverables include:  Website building, Hosting and Maintenance.",
            optimization: "We promote their online presence across all social media channels. Through building their website it has bridge the communicate gap with their audience.",
            result: {
                title: "The results we achieved were very tremendous within the first three months. ",
                data: [
                    "40% increase in donations for their programs and fellowship.",
                    "60% increase in Online presence for Reform7."
                ]
            }
        }
    },

    {
        id: 4,
        class: "filter-web",
        name: "Sound mind ministries",
        image: "/assets/images/projects/webServices/sld9.jpeg",
        url: "",
        desc: "A NGO that provide sound teaching of of God's word",
        full_desc: {
            aim: "Sound mind ministries want to grow their ministry and NGO services. They want to bring their message to a wider audience that will contribute and benefit from it.",
            gap: "Sound mind ministries didn’t have any website to grow their online presence. Their ministry and NGO activity didn’t reach audience who were interested to be part of.",
            solution: "We designed and built their website and hosted the website on a secured web hosting platform. Some of our deliverables include:  Website building, Hosting and Maintenance.  ",
            optimization: "We promote their online presence across all social media channels. Through building their website it has bridge the communicate gap with their audience.",
            result: {
                title: "The results we achieved were very tremendous within the first three months.",
                data: [
                    "40% increase in donations for their programs and fellowship.",
                    "60% increase in Online presence for Sound Mind Ministries."
                ]
            }
        }
    },
];

const services = [
    { id: 1, image: "/assets/images/BRANDING.jpeg", title: "Branding", short_desc: "Our branding services is focused on to key areas of brand: Awareness and strategy. We make design that promote your awareness. We developed strategic road map to revamp your brand.", description: "Our branding services is focused on to key areas of brand: Awareness and strategy. We make design that promote your awareness. We developed strategic road map to revamp your brand. Features and benefit: Mobile: a  well design brand is mobile. Your customer carry you around. Memorable: when your customer remember an experience with your brand it is visual that the remember. Story: we provide design that help you tell stories that relate to your audience." },

    { id: 2, image: "/assets/images/web.jpeg", title: "Websites", short_desc: "We design and build web applicartion for various use cases. Features and benefit: Responsiveness: your website can be easily accessible on different devices of your users.", description: "We design and build web applicartion for various use cases. Features and benefit: Responsiveness: your website can be easily accessible on different devices of your users. Hight conversion: the goal is to make sure your have a return investment. We built the website with features with feature that enhance high sales conversion Security: we guarantee your full security. We make sure your users privacy is well protect. Support: we dont live you hanging. We provide you 24/7 support to ensure quality customer service" },

    { id: 3, image: "/assets/images/software.jpeg", title: "Custom Application", short_desc: "We build App for mobile, Desktop and other custom device", description: "We build App for mobile, Desktop and other custom device" },
];

const news = { title: "Particpate in Our Training", description: "Dealdrive Technology Skillup programs is a digital skill acquisition program that train you to be master of tech related skills in the field of design, software and web application" };

const testimonials = [
    { star: "5", id: "1", image: "/assets/images/mathics.jpeg", author: "Abasiofon Peter", title: "Scribe, The Mathics", description: "Thank you Dealdrive technology. You did a great job and your service delivery is quite commendable." },
    { star: "5", id: "2", image: "/assets/images/moses.jpeg", author: "David Offiong", title: "Business Owner", description: "Your services are top-notch bro I love how organized it is And yes the designs are superb! Well done!" },
];

const contactus = { email1: "torwisdom4@gmail.com", email2: "dealdrivetechnology@gmail.com", phone1: "+2348182041899", phone2: "+2348061467293", address: "81 Itu road, Uyo, Akwa Ibom, Nigeria" };

const attendants = [{
        app: 'whatsapp',
        label: 'Customer support',
        name: 'Muekara Tor',
        number: '2348061467293',
        avatar: {
            src: 'https://avatars0.githubusercontent.com/u/8084606?s=460&u=20b6499a416cf7129a18e5c168cf387e159edb1a&v=4',
            alt: 'Muekara Tor'
        }
    },

    // ...
];

const footerLinks = [

    { name: 'Training', to: { name: 'Training' } },
    { name: 'Projects', to: { name: 'Projects' } },
    { name: 'Services', to: { name: 'Services' } },

];

const navigations = [
    { name: 'Home', to: { name: 'Index' } },
    { name: 'Services', to: { name: 'Services' } },
    { name: 'Projects', to: { name: 'Projects' } },
    { name: 'Contact Us', to: { name: 'Contact' } },
    { name: 'About Us', to: { name: 'About' } },


    { name: 'Blog', to: { name: 'Blog' } },
    // { name: 'Training', to: { name: 'Training' } },


];

const faqs = [{
        id: "1",
        question: "How much will it cost to design and build my website?",
        answer: "Each business's needs are different, so due to variations in scope, pricing from one app development to the next can be quite different. Our typical end-to-end app development costs N100,000-N100,000,000. If you’d like a more detailed breakdown of the pricing, request for a quote to get a copy of our pricing sheet."
    },
    {
        id: "2",
        question: "Why do i need a custom application?",
        answer: "Custom applications can be a web app that runs on the browser or software that can be install to run to on your device. Building a custom application is dependent on the use case. You may want to build a custom app for your production system, to help you maintain a consistent product. You may want to build a sales app for your sales team."
    },
    {
        id: "3",
        question: "How long does it take to build my app?",
        answer: "Similar to questions regarding cost, the timeline will vary greatly based on the scope of your web design project. Typically, our end-to-end build projects take 4-8 months to complete."
    },
    {
        id: "4",
        question: "Who do you provide your service to?",
        answer: "We work with even balance of start-ups, small businesses, non-profits, and enterprise clients across a multitude of industries."
    },
    {
        id: "5",
        question: "What kind of brand design do you do?",
        answer: "We provide full branding services that guaranteed your brand awareness. Our designs are bespoke. They make you unique."
    },
    {
        id: "6",
        question: "Can you work with my existing team?",
        answer: "Absolutely. It’s common for our Company to collaborate with your internal or external digital teams including developers, designers, production, sales and market team. Throughout the course of a project, we often help these teams set a better structural foundation for smarter segmentation, and improve goal- and task-tracking. Post-launch, we can collaborate with your team to produce new landing pages, website sections, and software tools to make their work productive."
    },
    {
        id: "7",
        question: "Why do I trust to do business with you?",
        answer: "We are looking after for your growth. We have the best team for your projects. We are legally registered. We have a responsive support team, online and offline."
    },

];

const teams = [{
        image: "/assets/images/team/wisdom.jpg",
        name: "Muekara Tor, C.E.0",
        title: "Business Development Director",
        socials: [
            { name: 'twitter', icon: 'fab fa-twitter', profile: 'https://twitter.com/muekarator' },
            { name: 'facebook', icon: 'fab fa-facebook', profile: 'https://web.facebook.com/muekarator' },
            { name: 'instagram', icon: 'fab fa-instagram', profile: 'https://www.instagram.com/muekarator/' },
            { name: 'linkedin', icon: 'fab fa-linkedin', profile: 'https://www.linkedin.com/in/muekarator/' },
        ]
    }, {
        name: "Moses Imeh ",
        image: "/assets/images/team/moses.jpg",
        title: "Head of Projects Management",
        socials: [
            { name: 'twitter', icon: 'fab fa-twitter', profile: 'https://twitter.com/imehmoses1' },
            { name: 'facebook', icon: 'fab fa-facebook', profile: 'https://web.facebook.com/moses.lavido.5' },
            { name: 'instagram', icon: 'fab fa-instagram', profile: 'https://www.instagram.com/imehmoses1/' },
            { name: 'linkedin', icon: 'fab fa-linkedin', profile: 'https://www.linkedin.com/in/MosesImeh/' },
        ]
    }, {
        image: "/assets/images/team/john.jpg",
        name: "John Ayuk",
        title: "C.T.O & DevOps Engineer",
        socials: [
            { name: 'twitter', icon: 'fab fa-twitter', profile: 'https://twitter.com/idev_ebi ' },
            { name: 'facebook', icon: 'fab fa-facebook', profile: 'https://web.facebook.com/ayuk.john.5036' },
            { name: 'instagram', icon: 'fab fa-instagram', profile: 'https://www.instagram.com/' },
            { name: 'linkedin', icon: 'fab fa-linkedin', profile: 'https://www.linkedin.com/in/john-ayuk-2205441b5/' },
        ]
    },
    {
        image: "/assets/images/team/tobi.jpg",
        name: "Oluwatobi Odekunle",
        title: "Fullstack Developer",
        socials: [
            { name: 'twitter', icon: 'fab fa-twitter', profile: 'https://twitter.com/lordteecode' },
            { name: 'facebook', icon: 'fab fa-facebook', profile: 'https://web.facebook.com/oluwatobiloba.odekunle.75' },
            { name: 'instagram', icon: 'fab fa-instagram', profile: 'https://www.instagram.com/_omotolanie/' },
            { name: 'linkedin', icon: 'fab fa-linkedin', profile: 'https://www.linkedin.com/in/lordteecode/' },
        ]
    },
];

const blog = [{
        title: 'EIGHT STRATEGIES FOR BUSINESS GROWTH',
        description: "Build A Brand",
        date: '02/ 08/ 2022',
        category: 'Business',
        image: '/assets/images/post/post-landscape-2.jpg',
        id: 1,
        userProfile: {
            name: 'Wade Warren',
            image: '/assets/images/me.png'
        }
    },

    {
        title: '5 WAYS TO OVERCOME COMPLEX DATA CHALLENGES AS AN ORGANISATION',
        description: "1. Build A Brand",
        date: '02/ 08/ 2022',
        category: 'Business',
        image: '/assets/images/post/post-landscape-4.jpg',
        id: 2,
        userProfile: {
            name: 'Wade Warren',
            image: '/assets/images/me.png'
        }
    }
];

const training = {
    title: "SkillUp Program",
    banner: "/assets/images/page-header.jpg",
    bannerContent: "The technology industry is a promising market place for jobs and opportunities. Obtaining a digital skill is one of the viable options out there. Welcome to our SkillUp program.",
    cardContent: {
        heading1: "The Process",
        heading2: "Follow this process to learn the most in-demand skills.",
        contents: [
            { title: "Pickup a skill", icon: "/assets/images/pick.jpg", content: "Begin your digital journey by picking a skill. You can get our expert advice in this process." },
            { title: "Get trained", icon: "/assets/images/training.jpg", content: "The expert in anything was once a beginner.We train you from beginner level to profession." },
            { title: "Get onboarded", icon: "/assets/images/onboard.jpg", content: "With our certification we lunch into your career.We train you on how to keep evolving when the technology industry keep innovating" },
        ]
    },
    courseContent: {
        heading1: "Courses",
        heading2: "Explore our list of courses and pick anyone to start your journey.",
        courses: [{
                id: 1,
                title: "Animation",
                short_desc: "",
                content: {
                    sections: [{
                            title: "What you will learn.",
                            options: [
                                "Students will learn how to make, texture, rig, animate & make characters talk. Students will learn how to create several different animations from start to end",
                                "By the end of the course, students will be able to fully make, rig, texture and animate 3D characters including how to make them talk",
                                "By the end of the course, students will be equiped with the skills to make their own scenes and characters from start to finish and fully animate them",
                                "By the end of the course, students will learn the ins and outs of making characters, rigging them, animating them, making their own sounds for their animations!",
                            ],
                            content: ""
                        },
                        {
                            title: "Description",
                            content: `
                            *Learn character creation and animation from A-Z with the popular 3D program "Blender"
                            Want to learn 3D character creation and animation but don't know where to start? No problem! In this course we go from A-Z, from the basics to the more advanced of character creation to animation. This course is project based so we will be using the skills we learn along the way to create some awesome animations.
                            Learn The Art of 3D Animation From The Very Basics to The More Advanced
                            *We will kick it off with learning the VERY basics of Blender. How to navigate around the scene, manipulate objects and everything you need to know to be comfortable in Blender!
                            *Then we will start with our very first animation project! Learning the basics of animation, modeling, materials, shapekeys to animate the face and much more to create our very first animation scene!
                            *Our second animation will be all about curves, animating along curves, using particle systems, modeling, texturing and much more! By this point you will start to feel comfortable with Blender and 3D animation and have the skills and knowledge where you can start doing your own projects!
                            *Our third project is a full blown animation! Just this one alone will teach you everything you need to know about character creation and animation! From making our character to rigging and adding materials to then creating our whole scene, lighting, adding sounds and much more! By the end of this you will have created a full blown animation that looks great and have learned the skills needed to create your own!
                            *Our fourth project leads us to creating a human character! First making the human from scratch to then creating a full body rig that works nicely! In this one we go even more in depth with the node or shader editor and take a look at making different materials such as the eye material, skin shader and cloth material for our character. We will then fully animate this character, see how to make our own sounds and MUCH more!
                            *For our fifth project we will be lip synching and making a character that talks! Firstly we will be modeling and making our alien from scratch! Then adding materials and a rig to fully animate and control him. We will then see how to make a character talk and much more!
                            *Each project we do builds on the previous one and the further you go, the more you will be applying and doing!
                            *End With The Confidence and Know How to Be Able to Create Your Own Projects and Animations From Just An Idea to Finished Product
                            The Power to Create in the Palm of Your Hands
                            *Use the skills you learn to then create your own artwork and animations
                            *Learn and follow along with the workflow of 5 complete animations from A-Z
                            *Finish the course with your very own animations and work of art that you can be proud of
                            *Lifetime access!
                            By the end of this training, you will emerge equipped with everything you need to know about character creation and animation! It is PACKED with character animation
    
                            `,
                            options: []
                        }
                    ]
                },
                image: "/assets/images/animation.jpg",
            },
            { id: 2, title: "Brand Designs", content: "", image: "/assets/images/courses/brand.jpg", },
            { id: 3, title: "Digital Marketing", content: "", image: "/assets/images/courses/digital.jpg", },
            { id: 4, title: "UI/UX", content: "", image: "/assets/images/courses/uiux.jpg", },
            { id: 5, title: "Web Development", content: "", image: "/assets/images/courses/web.jpg", },
            { id: 6, title: "Cyber Security & Ethical Hacking", content: "", image: "/assets/images/courses/security.jpg", },
        ],
        levels: [
            { id: 0, duration: "3 months", title: "Beginner", content: "At this level you will be taking through the fundamentals of the skill. You will understand what technology to use and how to work with them." },
            { id: 1, duration: "6 months", title: "Intermediate", content: "Train you on how to build real-time projects. This is where you get into intense training with whatever skill you pick." },
            { id: 2, duration: "12 months", title: "Professional", content: "Help you build a professional career with your skill. Train you on how to solve real life problems with your skill. Teach you how to pass job interview." },
        ],
    },

    sections: [
        { id: 1, options: [], title: "ABOUT OUR TRAINING", content: "A Dealdrive Technology Skillup program is a digital skill acquisition program that trains you to be master of technology related skills in the field of design, software and web application. It is scheduled to hold twice a year." },
        { id: 2, options: [], title: "ABOUT OUR COMMUNITY", content: "We have an unending learning community that helps our students grows continuously even after their training. Students have access to this membership immediately after their training." },
        { id: 3, options: [], title: "ABOUT OUR INTERNSHIP", content: "Our students are being retained at the end of their training to test their level of expertise on the skill they were trained on before issuing out certificate." },
        {
            id: 4,
            title: "BENEFITS",
            content: "Our SkillUp Program has alot of benefits that will change your career. The following are the list of benefits you will gain:-",
            options: [
                "1. Instant solution to daily problem encounter by our member while carrying out work.",
                "2. Weekend quiz to help members grow faster.",
                "3. Code challenge: twice monthly. Winners go home with prices.",
                "4. Access to remote jobs."
            ]
        },
    ]
};

const store = createStore({
    state: {
        training,
        navigations,
        footerLinks,
        teams,
        faqs,
        slides,
        socials,
        contacts,
        contactus,
        attendants,
        about,
        categories,
        project_categories,
        projects,
        services,
        news,
        testimonials,
        blog,
        user: {
            data: {},
            token: sessionStorage.getItem('TOKEN')
        },

        // admin section
        adminnavigation

    },
    getters: {},
    actions: {

        register: async({ commit }, data) => {

            const response = await axiosClient.post('/register', data);

            commit('setUserData', response.data);

            return response.data;

        },

        login: async({ commit }, data) => {

            const response = await axiosClient.post('/login', data);

            commit('setUserData', response.data);

            return response.data;

        },

        logout: async({ commit }) => {

            const response = await axiosClient.post('/logout');

            commit('logout');

            return response.data;

        },

        getData: async({ commit }, key) => {

            const response = await axiosClient.get(`/${key}`);

            let result = response.data;

            if (response.data.message == "Sorry No Data...") {

                result = store.state[key];

            }

            // console.log(response.data, result)

            const data = {
                response: result,
                key
            }

            commit('setData', data);

            return result;

        },

        postData: async({ commit }, { key, payload }) => {

            const response = await axiosClient.post(`${key}`, payload);


            // commit('setService', response.data, key);


            return response.data;
        },

        postFormData: async({ commit }, { key, payload }) => {

            const response = await axiosClient.post(`${key}`, payload, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            });

            // console.log(response, ' response ');

            // commit('setData', key, response.data);

            return response.data;
        },

        updateFormData: async({ commit }, { key, payload }) => {

            const response = await axiosClient.put(`${key}`, payload, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            });

            // console.log(response, ' response ');

            // commit('setData', key, response.data);

            return response.data;
        },

        deleteData: async({ commit }, key) => {

            const response = await axiosClient.delete(`${key}`);

            return response.data;
        }

    },
    mutations: {
        logout: (state) => {
            state.user.token = null;
            state.user.data = {};
            sessionStorage.removeItem("TOKEN");
        },
        setData: (state, { response, key }) => {
            // console.log(response, key);
            state[key] = response;
        },
        setUserData: (state, { data, token }) => {
            state.user.data = data;
            state.user.token = token;
            sessionStorage.setItem('TOKEN', token);
        }
    },
    modules: {}

});

export default store;