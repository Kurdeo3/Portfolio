import user_image from './user-image.jpg';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import flutter from './flutter.png';
import c from './c.png';
import html from './html.png';
import css from './css.png';
import oracle from './oracle.png';
import mysql from './mysql.png';
import canva from './canva.png';
import postman from './postman.png';
import github from './github.png';
import bootstrap from './bootstrap.png';
import tailwind from './tailwind.png';
import laravel from './laravel.png';
import php from './php.png';
import react from './react.png';
import javascript from './javascript.png';
import dart from './dart.png';
import java from './java.png';
import linkedin from './linkedin.png';
import instagram from './instagram.png';
import mongo_db from './mongo_db.png';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    php,
    laravel,
    css,
    html,
    github,
    postman,
    oracle,
    mysql,
    flutter,
    canva,
    c,
    bootstrap,
    tailwind,
    react,
    javascript,
    dart,
    java,
    linkedin,
    instagram,
    mongo_db
};

export const workData = [
    {
        title: 'ReuseMart',
        description: 'ReuseMart is a cross-platform e-commerce application for second-hand goods, accessible via web and mobile. The platform supports buyers, organizations, consignees, and staff with tailored features. Buyers can easily purchase used items, while organizations may request item donations. Consignees are able to list their goods for sale, and staff members manage all operational aspects, including transactions and user activities. Developed using PHP, JavaScript, Bootstrap, Tailwind, and Laravel for the web, and Flutter with Dart for mobile, ReuseMart offers a seamless, scalable, and user-focused experience across platforms.',
        link: '',
        bgImages: [
        '/cover_reusemart.png',
        '/cover_project_mobile_reusemart.png'
        ],
        techIcons: [
            assets.php,
            assets.javascript,
            assets.dart,
            assets.laravel,
            assets.flutter,
            assets.bootstrap,
            assets.tailwind,
            assets.mysql,
        ],
    },
    {
        title: 'Atma Hospital',
        description: 'Atma Hospital is a responsive and user-friendly website designed for modern hospital services. Users can easily register for medical checkups and schedule appointments with doctors through an intuitive interface. On the administrative side, the system enables efficient monitoring and management of doctor data, medical checkup records, and appointment schedules, ensuring seamless coordination between patients and hospital staff. Built with Laravel for the backend and Bootstrap for the frontend, Atma Hospital delivers a clean, organized, and accessible experience for both users and administrators',
        link: 'https://github.com/Kurdeo3/AtmaHospital.git',
        bgImages: [
        '/cover_atma_hospital.png',
        ],
        techIcons: [
            assets.php,
            assets.laravel,
            assets.bootstrap,
            assets.mysql,
        ]
    },
    {
        title: 'Gym Point',
        description: 'Gym Point is a mobile-based application for managing gym-related services, built using Flutter and Dart. Users can browse a list of personal trainers, available gym equipment, and scheduled gym classes, then conveniently book their preferred services online. This ensures a smooth and efficient experience by allowing members to reserve in advance and avoid unavailability upon arrival. With a focus on accessibility and real-time updates, Gym Point enhances the way users interact with gym facilities.',
        link: 'https://github.com/Kurdeo3/GymPoint.git',
        bgImages: [
        '/cover_gym_point.png'
        ],
        techIcons: [
            assets.dart,
            assets.laravel,
            assets.flutter,
            assets.mysql,
            assets.firebase
        ]
    },
    {
        title: 'Thousand Sunny Hotel',
        description: 'Thousand Sunny Hotel is a hotel service booking system developed using the C programming language with Dev C++ as the IDE. The system allows users to reserve rooms and other hotel services in a structured and organized manner. It applies key concepts from the Data Structures and Information course, such as arrays, linked lists, and control structures, to create an efficient, user-friendly, and functional booking experience.',
        link:'https://github.com/Kurdeo3/ThousandSunnyHotel.git',
        bgImages: [
        '/realestatexyz.png'
        ],
        techIcons: [
            assets.c
        ]
    }
];


export const programmingLanguageList = [
    { icon: assets.c, title: 'C', description: 'UI/UX design focuses on creating a seamless user experience...', link: '' },
    { icon: assets.php, title: 'PHP', description: 'Creative design solutions to enhance visual communication...', link: '' },
    { icon: assets.dart, title: 'Dart', description: 'Creative design solutions to enhance visual communication...', link: '' },
    { icon: assets.javascript, title: 'JavaScript', description: 'Creative design solutions to enhance visual communication...', link: '' },
    { icon: assets.html, title: 'HTML', description: 'Web development is the process of building, programming...', link: '' },
    { icon: assets.css, title: 'CSS', description: 'Mobile app development involves creating software for mobile devices...', link: '' },
]

export const frameworksList = [
    { icon: assets.laravel, title: 'Laravel', description: 'Web development is the process of building, programming...', link: '' },
    { icon: assets.react, title: 'React', description: 'Mobile app development involves creating software for mobile devices...', link: '' },
    { icon: assets.flutter, title: 'Flutter', description: 'UI/UX design focuses on creating a seamless user experience...', link: '' },
    { icon: assets.bootstrap, title: 'Bootstrap', description: 'Creative design solutions to enhance visual communication...', link: '' },
    { icon: assets.tailwind, title: 'Tailwind', description: 'Creative design solutions to enhance visual communication...', link: '' },
]

export const databasesList = [
    { icon: assets.oracle, title: 'Oracle', description: 'Web development is the process of building, programming...', link: '' },
    { icon: assets.mysql, title: 'MySQL', description: 'Mobile app development involves creating software for mobile devices...', link: '' },
    { icon: assets.mongo_db, title: 'MongoDB', description: 'UI/UX design focuses on creating a seamless user experience...', link: '' },
    { icon: assets.firebase, title: 'Firebase', description: 'UI/UX design focuses on creating a seamless user experience...', link: '' },
]

export const developmentToolsList = [
    { icon: assets.vscode, title: 'VS Code', description: 'Web development is the process of building, programming...', link: '' },
    { icon: assets.canva, title: 'Canva', description: 'Mobile app development involves creating software for mobile devices...', link: '' },
    { icon: assets.figma, title: 'Figma', description: 'UI/UX design focuses on creating a seamless user experience...', link: '' },
    { icon: assets.postman, title: 'Postman', description: 'Creative design solutions to enhance visual communication...', link: '' },
    { icon: assets.github, title: 'Github', description: 'Creative design solutions to enhance visual communication...', link: '' },
]

export const infoList = [
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: [{text : 'Universitas Atma Jaya Yogyakarta', year : '2022 - Present'}, {text: 'SMAN 3 Kota Kediri', year: '2019 - 2022'}] },   
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Work Experience', description: [{text : 'Assistant Lecturer of Database', year : 'Aug 2024 - Feb 2025'}] }
];

export const toolsData = [
    assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git
];