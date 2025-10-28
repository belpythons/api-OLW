import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Seed Programs
  const programs = await Promise.all([
    prisma.programs.create({
      data: {
        title: 'Web Development Fundamentals',
        description: 'Learn the basics of HTML, CSS, and JavaScript to build modern web applications',
        modules: {
          create: [
            {
              title: 'HTML Basics',
              description: 'Learn semantic HTML and document structure',
              orderNum: 1,
            },
            {
              title: 'CSS Styling',
              description: 'Master CSS layouts, animations, and responsive design',
              orderNum: 2,
            },
            {
              title: 'JavaScript Fundamentals',
              description: 'Understand JavaScript basics and DOM manipulation',
              orderNum: 3,
            },
            {
              title: 'Project: Portfolio Website',
              description: 'Build your first portfolio website',
              orderNum: 4,
            },
          ],
        },
      },
    }),
    prisma.programs.create({
      data: {
        title: 'React.js Mastery',
        description: 'Master React.js framework including hooks, state management, and best practices',
        modules: {
          create: [
            {
              title: 'React Basics',
              description: 'Components, JSX, and Props',
              orderNum: 1,
            },
            {
              title: 'State Management',
              description: 'useState, useEffect, and Context API',
              orderNum: 2,
            },
            {
              title: 'Advanced Patterns',
              description: 'Custom hooks and performance optimization',
              orderNum: 3,
            },
            {
              title: 'Project: E-commerce App',
              description: 'Build a complete e-commerce application',
              orderNum: 4,
            },
          ],
        },
      },
    }),
    prisma.programs.create({
      data: {
        title: 'Node.js Backend Development',
        description: 'Build scalable backend applications with Node.js, Express, and MongoDB',
      },
    }),
    prisma.programs.create({
      data: {
        title: 'Python for Data Science',
        description: 'Learn Python programming with focus on data analysis, visualization, and machine learning',
      },
    }),
    prisma.programs.create({
      data: {
        title: 'Mobile App Development',
        description: 'Create cross-platform mobile applications using React Native',
      },
    }),
    prisma.programs.create({
      data: {
        title: 'DevOps Engineering',
        description: 'Master CI/CD, containerization, and cloud deployment strategies',
      },
    }),
    prisma.programs.create({
      data: {
        title: 'Cybersecurity Fundamentals',
        description: 'Learn essential security concepts and ethical hacking techniques',
      },
    }),
    prisma.programs.create({
      data: {
        title: 'UI/UX Design Principles',
        description: 'Design beautiful and user-friendly interfaces',
      },
    }),
    prisma.programs.create({
      data: {
        title: 'Machine Learning with Python',
        description: 'Implement machine learning algorithms and neural networks',
      },
    }),
    prisma.programs.create({
      data: {
        title: 'Full Stack Development',
        description: 'Become a complete full-stack developer with modern technologies',
      },
    }),
  ]);

  // Seed Online Courses
  await prisma.onlineCourses.createMany({
    data: [
      {
        programId: 1,
        title: 'HTML Full Course',
        url: 'https://www.youtube.com/watch?v=pQN-pnXPaVg',
        platform: 'YouTube',
        duration: '2h 10m',
      },
      {
        programId: 1,
        title: 'CSS Complete Guide',
        url: 'https://www.youtube.com/watch?v=1Rs2ND1ryYc',
        platform: 'YouTube',
        duration: '6h 30m',
      },
      {
        programId: 2,
        title: 'React JS Crash Course',
        url: 'https://www.youtube.com/watch?v=w7ejDZ8SWv8',
        platform: 'YouTube',
        duration: '1h 49m',
      },
      {
        programId: 2,
        title: 'React Hooks Tutorial',
        url: 'https://www.youtube.com/watch?v=dpw9EHDh2bM',
        platform: 'YouTube',
        duration: '3h 15m',
      },
      {
        programId: 3,
        title: 'Node.js Tutorial',
        url: 'https://www.youtube.com/watch?v=TlB_eWDSMt4',
        platform: 'YouTube',
        duration: '5h 00m',
      },
      {
        programId: 4,
        title: 'Python for Beginners',
        url: 'https://www.youtube.com/watch?v=_uQrJ0TkZlc',
        platform: 'YouTube',
        duration: '6h 14m',
      },
    ],
  });

  // Seed Certifications
  await prisma.certifications.createMany({
    data: [
      {
        programId: 1,
        title: 'Web Developer Certificate',
        description: 'Certification for completing web development fundamentals',
        requirements: 'Complete all modules and final project',
      },
      {
        programId: 2,
        title: 'React Developer Certificate',
        description: 'Professional React.js developer certification',
        requirements: 'Pass final assessment with 80% score',
      },
      {
        programId: 3,
        title: 'Node.js Backend Certificate',
        description: 'Backend development certification',
        requirements: 'Build and deploy a full backend application',
      },
      {
        programId: 4,
        title: 'Data Science Certificate',
        description: 'Python data science practitioner certificate',
        requirements: 'Complete all projects and assessments',
      },
    ],
  });

  // Seed Roadmaps
  const roadmaps = await Promise.all([
    prisma.roadmaps.create({
      data: {
        careerPath: 'Frontend Developer',
        description: 'Complete path to become a frontend developer',
        steps: {
          create: [
            {
              title: 'Learn HTML & CSS',
              description: 'Master the basics of web structure and styling',
              orderNum: 1,
            },
            {
              title: 'JavaScript Fundamentals',
              description: 'Understand programming concepts with JavaScript',
              orderNum: 2,
            },
            {
              title: 'React.js Framework',
              description: 'Build dynamic UIs with React',
              orderNum: 3,
            },
            {
              title: 'State Management',
              description: 'Learn Redux or Context API',
              orderNum: 4,
            },
            {
              title: 'Build Projects',
              description: 'Create portfolio projects',
              orderNum: 5,
            },
          ],
        },
      },
    }),
    prisma.roadmaps.createMany({
      data: [
        {
          careerPath: 'Backend Developer',
          description: 'Master server-side development technologies',
        },
        {
          careerPath: 'Full Stack Developer',
          description: 'Learn both frontend and backend technologies',
        },
        {
          careerPath: 'Data Scientist',
          description: 'Journey to become a data science expert',
        },
        {
          careerPath: 'Mobile Developer',
          description: 'Build native and cross-platform mobile apps',
        },
        {
          careerPath: 'DevOps Engineer',
          description: 'Master deployment and infrastructure management',
        },
      ],
    }),
  ]);

  // Seed Forums
  const forums = await prisma.forums.createMany({
    data: [
      {
        category: 'General Discussion',
        description: 'Discuss anything related to programming and technology',
      },
      {
        category: 'Web Development',
        description: 'HTML, CSS, JavaScript, and frameworks discussion',
      },
      {
        category: 'Mobile Development',
        description: 'iOS, Android, and React Native topics',
      },
      {
        category: 'Data Science',
        description: 'Machine learning, AI, and data analysis',
      },
      {
        category: 'Career Advice',
        description: 'Job hunting, interviews, and career growth',
      },
      {
        category: 'Project Showcase',
        description: 'Share your projects and get feedback',
      },
    ],
  });

  // Seed Users
  const users = await prisma.users.createMany({
    data: [
      {
        name: 'John Doe',
        email: 'john.doe@example.com',
      },
      {
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
      },
      {
        name: 'Bob Johnson',
        email: 'bob.johnson@example.com',
      },
      {
        name: 'Alice Brown',
        email: 'alice.brown@example.com',
      },
      {
        name: 'Charlie Davis',
        email: 'charlie.davis@example.com',
      },
    ],
  });

  // Seed Posts
  await prisma.posts.createMany({
    data: [
      {
        forumId: 1,
        userId: 1,
        title: 'Welcome to our learning platform!',
        content: 'Excited to start learning with everyone here!',
      },
      {
        forumId: 2,
        userId: 2,
        title: 'Best resources for learning React?',
        content: 'What are your favorite resources for learning React.js?',
      },
      {
        forumId: 3,
        userId: 3,
        title: 'React Native vs Flutter',
        content: 'Which one should I choose for mobile development?',
      },
      {
        forumId: 4,
        userId: 4,
        title: 'Getting started with Machine Learning',
        content: 'Any tips for beginners in ML?',
      },
      {
        forumId: 5,
        userId: 5,
        title: 'How to prepare for technical interviews?',
        content: 'Share your interview preparation strategies',
      },
    ],
  });

  // Seed Comments
  await prisma.comments.createMany({
    data: [
      {
        postId: 1,
        userId: 2,
        content: 'Welcome! Happy to have you here!',
      },
      {
        postId: 1,
        userId: 3,
        content: 'Looking forward to learning together!',
      },
      {
        postId: 2,
        userId: 1,
        content: 'I recommend the official React documentation',
      },
      {
        postId: 2,
        userId: 4,
        content: 'Try building small projects to practice',
      },
      {
        postId: 3,
        userId: 5,
        content: 'Both are great! It depends on your background',
      },
    ],
  });

  // Seed About
  await prisma.about.create({
    data: {
      title: 'About Our Platform',
      content: 'We are dedicated to providing free, high-quality programming education to everyone.',
      vision: 'To democratize programming education and make it accessible to all.',
      mission: 'Empowering individuals with the skills needed to succeed in the digital economy.',
    },
  });

  // Seed Contacts
  await prisma.contacts.createMany({
    data: [
      {
        type: 'Email',
        value: 'support@learningplatform.com',
        icon: 'faEnvelope',
      },
      {
        type: 'Phone',
        value: '+1 234 567 8900',
        icon: 'faPhone',
      },
      {
        type: 'Address',
        value: '123 Tech Street, Silicon Valley, CA',
        icon: 'faMapMarkerAlt',
      },
      {
        type: 'LinkedIn',
        value: 'https://linkedin.com/company/learningplatform',
        icon: 'faLinkedin',
      },
      {
        type: 'Twitter',
        value: 'https://twitter.com/learningplatform',
        icon: 'faTwitter',
      },
    ],
  });

  // Seed Documentaries
  await prisma.documentaries.createMany({
    data: [
      {
        title: 'The Internet Story',
        description: 'Documentary about the history and evolution of the internet',
        url: 'https://www.youtube.com/watch?v=h8K49dD52WA',
        duration: '50m',
        category: 'Technology',
      },
      {
        title: 'AI Revolution',
        description: 'Exploring the impact of artificial intelligence on society',
        url: 'https://www.youtube.com/watch?v=5dZ_lvDgevk',
        duration: '1h 20m',
        category: 'AI',
      },
      {
        title: 'Coding Bootcamp Experience',
        description: 'Following students through intensive coding bootcamp',
        url: 'https://www.youtube.com/watch?v=kdEf8gN_Mac',
        duration: '45m',
        category: 'Education',
      },
      {
        title: 'Women in Tech',
        description: 'Stories of pioneering women in technology',
        url: 'https://www.youtube.com/watch?v=FfPFr5AiVXQ',
        duration: '1h',
        category: 'Diversity',
      },
    ],
  });

  // Seed Community Links
  await prisma.communityLinks.createMany({
    data: [
      {
        platform: 'Discord',
        url: 'https://discord.gg/learningplatform',
        description: 'Join our Discord server for real-time chat',
        icon: 'faDiscord',
      },
      {
        platform: 'GitHub',
        url: 'https://github.com/learningplatform',
        description: 'Contribute to our open-source projects',
        icon: 'faGithub',
      },
      {
        platform: 'Facebook Group',
        url: 'https://facebook.com/groups/learningplatform',
        description: 'Connect with learners on Facebook',
        icon: 'faFacebook',
      },
      {
        platform: 'Telegram',
        url: 'https://t.me/learningplatform',
        description: 'Join our Telegram channel for updates',
        icon: 'faTelegram',
      },
      {
        platform: 'YouTube',
        url: 'https://youtube.com/learningplatform',
        description: 'Subscribe to our YouTube channel',
        icon: 'faYoutube',
      },
    ],
  });

  console.log('Database seeding completed successfully');
}

main()
  .catch((e) => {
    console.error('Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });