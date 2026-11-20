import type { Achievement, BlogPost } from '@/types';

export interface CertificationStory {
    slug: string;
    credentialId: string;
    introduction: string;
    sections: { id: string; heading: string; paragraphs: string[] }[];
    takeaway: string;
    resources: { label: string; url: string }[];
}

// Credential names, issuers, dates, and IDs were checked against the learner's
// Coursera records and original certificate images on November 20, 2026.
// These entries describe course/specialization completion separately from
// professional certifications awarded by Cisco, CompTIA, or ISC2.
export const courseraAchievements: Achievement[] = [
    {
        id: 'cert-coursera-generative-ai-cybersecurity',
        title: 'Generative AI: Boost Your Cybersecurity Career',
        issuer: 'IBM · Coursera',
        date: '2026-10-19',
        description: 'IBM course certificate covering generative AI in security analysis, threat intelligence, incident-response documentation, and the security of AI systems.',
        image: '/certificates/coursera-LPI5QWR576C5.jpg',
        credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/LPI5QWR576C5',
        credentialId: 'LPI5QWR576C5',
        tags: ['Generative AI', 'Cybersecurity', 'Threat Intelligence', 'AI Security'],
        type: 'Course Certificate',
        category: 'certification',
        blogSlug: 'generative-ai-cybersecurity-learning-journey',
        downloadUrl: '/certificates/coursera-LPI5QWR576C5.jpg',
    },
    {
        id: 'cert-coursera-cybersecurity-assessment',
        title: 'Cybersecurity Assessment: CompTIA Security+ & CYSA+',
        issuer: 'IBM · Coursera',
        date: '2026-10-19',
        description: 'IBM course completion in Security+ and CySA+ exam preparation, including domain review, practice assessments, and timed mock exams. Credential awarded for the Coursera course.',
        image: '/certificates/coursera-4SJ21Z507GDU.jpg',
        credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/4SJ21Z507GDU',
        credentialId: '4SJ21Z507GDU',
        tags: ['Cybersecurity', 'Security+', 'CySA+', 'Exam Preparation'],
        type: 'Course Certificate',
        category: 'certification',
        blogSlug: 'cybersecurity-assessment-security-plus-cysa',
        downloadUrl: '/certificates/coursera-4SJ21Z507GDU.jpg',
    },
    {
        id: 'cert-coursera-ccna-specialization',
        title: 'Cisco CCNA (200-301) — Coursera Specialization',
        issuer: 'Packt · Coursera',
        date: '2026-10-19',
        description: 'Packt specialization certificate for three completed courses spanning network fundamentals and access, IP connectivity and services, and security and automation. CCNA-aligned training delivered through Coursera.',
        image: '/certificates/coursera-AEWSM1Q1XSKS.jpg',
        credentialUrl: 'https://www.coursera.org/account/accomplishments/specialization/AEWSM1Q1XSKS',
        credentialId: 'AEWSM1Q1XSKS',
        tags: ['Networking', 'CCNA Training', 'Routing', 'Network Automation'],
        type: 'Specialization Certificate',
        category: 'certification',
        blogSlug: 'cisco-ccna-specialization-learning-journey',
        downloadUrl: '/certificates/coursera-AEWSM1Q1XSKS.jpg',
    },
    {
        id: 'cert-coursera-networking-fundamentals',
        title: 'Networking Fundamentals & Network Access',
        issuer: 'Packt · Coursera',
        date: '2026-10-19',
        description: 'Packt course certificate covering network components, IPv4 and IPv6, switching, VLANs, and wireless access. The first course in the Cisco CCNA (200-301) specialization.',
        image: '/certificates/coursera-YTI55TPCZLTD.jpg',
        credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/YTI55TPCZLTD',
        credentialId: 'YTI55TPCZLTD',
        tags: ['Network Fundamentals', 'VLANs', 'IPv4 / IPv6', 'Network Access'],
        type: 'Course Certificate',
        category: 'certification',
        blogSlug: 'networking-fundamentals-network-access',
        downloadUrl: '/certificates/coursera-YTI55TPCZLTD.jpg',
    },
    {
        id: 'cert-coursera-cissp-specialization',
        title: 'Certified Information Systems Security Professional (CISSP) — Coursera Specialization',
        issuer: 'Infosec · Coursera',
        date: '2026-10-17',
        description: 'Infosec specialization certificate for completing eight courses across the CISSP domains, from security and risk management to software development security. A separate learning credential from the ISC2 professional certification.',
        image: '/certificates/coursera-MF2JSNETUEEA.jpg',
        credentialUrl: 'https://www.coursera.org/account/accomplishments/specialization/MF2JSNETUEEA',
        credentialId: 'MF2JSNETUEEA',
        tags: ['Security Governance', 'Risk Management', 'IAM', 'CISSP Training'],
        type: 'Specialization Certificate',
        category: 'certification',
        blogSlug: 'cissp-specialization-security-perspective',
        downloadUrl: '/certificates/coursera-MF2JSNETUEEA.jpg',
    },
];

export const certificationStories: CertificationStory[] = [
    {
        slug: 'generative-ai-cybersecurity-learning-journey',
        credentialId: 'LPI5QWR576C5',
        introduction: 'A security alert can arrive with plenty of data and very little clarity. The difficult part is deciding what deserves attention, what the evidence actually supports, and what should happen next. That is the lens I bring to generative AI. Completing IBM’s Generative AI: Boost Your Cybersecurity Career on October 19, 2026, gave me a structured way to explore its place in that decision-making process.',
        sections: [
            {
                id: 'starting-with-the-security-problem',
                heading: 'Starting with the security problem',
                paragraphs: [
                    'My professional background spans enterprise infrastructure, cybersecurity, and automation. Those areas meet at a practical challenge: useful information is often distributed across tools, logs, documentation, and people. Bringing it together takes technical understanding and clear communication. AI becomes interesting when it helps with that work in a way an analyst can inspect.',
                    'The course connected generative AI fundamentals with security use cases, including threat intelligence, behavior analysis, report summarization, and response playbooks. Seeing those subjects together gave the learning a clear direction. The question was how a generated output could support an accountable security decision, with the underlying evidence still visible.',
                ],
            },
            {
                id: 'following-information-to-a-decision',
                heading: 'Following information to a decision',
                paragraphs: [
                    'Consider an analyst reviewing several incident notes. A useful summary would preserve the timeline, affected assets, observed behavior, and unresolved questions. It would also distinguish a confirmed event from an assumption. This is the kind of practical standard I use to think about AI-assisted security work: the output should make careful review easier.',
                    'The learning path also explored the threat side of the technology, from phishing and malicious content to attacks directed at AI systems. That connection matters. A tool that processes untrusted information needs boundaries around what it can see and do, especially when generated text might influence an investigation or an automated workflow.',
                ],
            },
            {
                id: 'keeping-human-judgment-in-the-process',
                heading: 'Keeping judgment in the process',
                paragraphs: [
                    'One principle I take from this achievement is that speed needs a review process. Before using an AI-generated recommendation, I want to know where its evidence came from, whether important context is missing, and how the recommendation could be checked. A fluent explanation is a starting point for scrutiny.',
                    'For someone who builds automation, this is a valuable design perspective. A responsible workflow should make it straightforward to review inputs, trace a conclusion, and stop an inappropriate action. Those are useful questions to ask before connecting a model to an operational tool, regardless of how impressive the first demonstration looks.',
                ],
            },
            {
                id: 'what-the-milestone-adds',
                heading: 'What this milestone adds to my work',
                paragraphs: [
                    'Earning this course certificate adds a focused AI learning milestone to my broader security and infrastructure experience. It gives me a clearer vocabulary for discussing where generative AI may assist an analyst, and where access controls, careful validation, and human responsibility remain central to the design.',
                    'The direction I want to carry forward is practical: start with a well-defined security task, establish how success will be evaluated, and keep the result reviewable. Whether the task is making a report clearer or organizing investigation context, the value lies in helping people reach better-supported decisions. That is the standard I want my technical work to meet.',
                ],
            },
        ],
        takeaway: 'AI earns a useful place in security when its contribution can be checked, explained, and connected to a responsible decision.',
        resources: [
            { label: 'Verify my IBM course certificate', url: 'https://www.coursera.org/account/accomplishments/verify/LPI5QWR576C5' },
            { label: 'Explore the IBM course', url: 'https://www.coursera.org/learn/generative-ai-boost-your-cybersecurity-career' },
        ],
    },
    {
        slug: 'cybersecurity-assessment-security-plus-cysa',
        credentialId: '4SJ21Z507GDU',
        introduction: 'Recognizing a security term is one thing. Choosing a defensible next step when several answers look plausible demands a different kind of understanding. IBM’s Cybersecurity Assessment: CompTIA Security+ & CYSA+ gave me a structured opportunity to examine that distinction. I completed the Coursera course on October 19, 2026, adding a focused assessment milestone to my continuing cybersecurity learning.',
        sections: [
            {
                id: 'making-knowledge-explainable',
                heading: 'Making knowledge explainable',
                paragraphs: [
                    'Working across networks, systems, and security creates a broad technical perspective. It also makes structured review valuable: the areas that appear frequently in day-to-day work are only part of the larger discipline. An assessment framework creates space to revisit concepts outside the immediate demands of an operational role.',
                    'The IBM course organized its preparation around the Security+ and CySA+ exams, including their domains, testing approach, practice assessments, and timed mock exams. Completing that learning path gave me a defined checkpoint. I could connect the subject matter to a broader question: can I explain why a particular response fits the situation?',
                ],
            },
            {
                id: 'reasoning-through-a-scenario',
                heading: 'Reasoning through a scenario',
                paragraphs: [
                    'A security scenario becomes more useful when the reasoning receives as much attention as the answer. What information is established? Which detail changes the priority? What would an action accomplish, and what might it disrupt? These questions turn a multiple-choice format into an opportunity to examine professional judgment.',
                    'Imagine an alert involving an unfamiliar login. The right next step depends on context such as the account’s role, the available evidence, and the organization’s response process. The example is simple, but the habit is valuable: identify the decision being asked for, separate evidence from assumption, and choose an action for a clear reason.',
                ],
            },
            {
                id: 'using-assessment-as-feedback',
                heading: 'Treating assessment as feedback',
                paragraphs: [
                    'Practice assessment offers a way to locate uncertainty. A difficult question can point to a concept that needs another explanation, a boundary between two controls, or an assumption worth reconsidering. That makes review more productive than simply moving from one topic to the next without examining how well they connect.',
                    'Timed preparation introduces another useful dimension: clarity under constraints. In professional settings, decisions often need to be communicated concisely. I value the discipline of identifying the essential facts, stating the recommendation, and explaining the reason behind it. Strong technical knowledge becomes more useful when other people can follow the reasoning.',
                ],
            },
            {
                id: 'carrying-the-discipline-forward',
                heading: 'Carrying the discipline forward',
                paragraphs: [
                    'Completing IBM’s exam-preparation course on Coursera gave this round of study a clear milestone. It brought foundational security and analyst-oriented topics into a structured assessment path. The lasting value is the discipline of examining how well I can connect a concept to a decision and explain the reasoning behind it.',
                    'The broader lesson I carry forward is to keep making knowledge testable. In an architecture discussion, an investigation, or a written recommendation, I want to be able to connect the proposed action to the evidence and the objective. Completing this course is one step in that ongoing work of becoming a more deliberate and articulate security professional.',
                ],
            },
        ],
        takeaway: 'A strong security answer includes the reason behind it: the evidence, the objective, and the tradeoffs that make the decision appropriate.',
        resources: [
            { label: 'Verify my IBM course certificate', url: 'https://www.coursera.org/account/accomplishments/verify/4SJ21Z507GDU' },
            { label: 'Explore the IBM assessment course', url: 'https://www.coursera.org/learn/cybersecurity-assessment-comptia-security-cysa' },
        ],
    },
    {
        slug: 'cisco-ccna-specialization-learning-journey',
        credentialId: 'AEWSM1Q1XSKS',
        introduction: 'Every application depends on a path through the network. Understanding that path means seeing how addressing, switching, routing, services, and security work together. Completing Packt’s Cisco CCNA (200-301) specialization on Coursera on October 19, 2026, brought those connections into one structured learning journey, from the first access connection to the possibilities of network automation.',
        sections: [
            {
                id: 'building-the-path-in-three-stages',
                heading: 'Building the path in three stages',
                paragraphs: [
                    'The specialization consisted of three courses: Networking Fundamentals & Network Access, IP Connectivity & IP Services, and Security Fundamentals & Network Automation. Completing all three created a clear progression. First came the building blocks and local connectivity, then communication between networks, followed by the controls and tools used to manage them.',
                    'That progression fits naturally with my infrastructure background. A network is part of a larger service chain that includes identity, operating systems, applications, and monitoring. Studying its components together makes it easier to describe how an individual configuration choice can affect the wider environment and the people who depend on it.',
                ],
            },
            {
                id: 'connecting-configuration-to-behavior',
                heading: 'Connecting configuration to behavior',
                paragraphs: [
                    'The learning covered areas such as IPv4 and IPv6, VLANs, routing, and supporting services. I see the value of those topics in the relationships between them. An address belongs to a network; a device needs a suitable path; an application may depend on name resolution. Understanding each piece helps explain the overall behavior.',
                    'A useful way to frame a technical discussion is to follow a request from its source toward its destination. Where should it travel? Which boundary should it cross? What evidence would show that the expected path is working? This approach gives network knowledge a practical purpose: making complex systems easier to reason about.',
                ],
            },
            {
                id: 'bringing-security-and-automation-together',
                heading: 'Bringing security and automation together',
                paragraphs: [
                    'The third course extended the journey into security and automation. For me, that is an especially useful connection because my work also includes building tools to support infrastructure operations. Before automating a network task, it helps to understand the behavior being changed, the permissions involved, and the evidence needed to verify the result.',
                    'Automation can make a well-defined process repeatable. It also makes clear requirements essential. A proposed change should have an intended state, a way to check the outcome, and a recovery approach if the result differs from expectations. Those considerations make the relationship between networking knowledge and software skills particularly valuable.',
                ],
            },
            {
                id: 'a-connected-view-of-infrastructure',
                heading: 'A more connected view of infrastructure',
                paragraphs: [
                    'Earning Packt’s three-course specialization certificate through Coursera marked the completion of a CCNA-aligned learning program. The journey connected foundational networking with services, security, and automation. That breadth is useful to me because dependable infrastructure requires an understanding of how the parts behave together.',
                    'What I carry forward is the habit of connecting details to the whole system. A VLAN, a route, or a service configuration becomes easier to assess when its purpose is clear. I want that clarity to show in how I troubleshoot, explain a design, and approach automation: a thoughtful path from the technical detail to the operational need.',
                ],
            },
        ],
        takeaway: 'Understanding a network means being able to explain the path, the boundaries, and the services that make communication possible.',
        resources: [
            { label: 'Verify my Packt specialization certificate', url: 'https://www.coursera.org/account/accomplishments/specialization/AEWSM1Q1XSKS' },
            { label: 'Explore the three-course specialization', url: 'https://www.coursera.org/specializations/packt-cisco-ccna-200-301' },
        ],
    },
    {
        slug: 'networking-fundamentals-network-access',
        credentialId: 'YTI55TPCZLTD',
        introduction: 'When a connection fails, the most useful first step is often a precise question. Is the device on the expected network? Does its addressing make sense? Is the access path behaving as intended? Packt’s Networking Fundamentals & Network Access helped bring those foundational questions into focus. I completed the course on October 19, 2026, as part of my broader networking learning.',
        sections: [
            {
                id: 'returning-to-the-building-blocks',
                heading: 'Returning to the building blocks',
                paragraphs: [
                    'Infrastructure work brings together many systems, each with its own interface and terminology. Beneath them are basic relationships that need to hold: a device connects through a medium, joins a network, and communicates using an agreed set of rules. Returning to those relationships is a useful way to keep technical thinking grounded.',
                    'The course covered network components, IPv4 and IPv6 addressing, switching, VLANs, and wireless access. These subjects form the starting point for the wider Cisco CCNA (200-301) specialization offered by Packt. I earned the individual course certificate as well as the specialization certificate, with this article focusing on the foundation itself.',
                ],
            },
            {
                id: 'turning-symptoms-into-questions',
                heading: 'Turning symptoms into questions',
                paragraphs: [
                    '“The network is down” describes an experience, but it leaves many possible explanations open. A more productive investigation begins by narrowing the scope. Is the issue limited to one device, one location, or one service? What still works? Which observation would help distinguish a local access problem from something farther along the path?',
                    'Thinking this way connects foundational knowledge to troubleshooting. An IP address, a subnet, and a switch port each provide part of the picture. Their value grows when they are considered together. I want to be able to explain why a check matters, so a technical investigation remains purposeful and understandable to someone reviewing it.',
                ],
            },
            {
                id: 'seeing-access-as-a-design-decision',
                heading: 'Seeing access as a design decision',
                paragraphs: [
                    'Network access also carries a security question: where should a device be allowed to communicate? Studying switching and VLANs provides a useful starting point for that conversation. The design needs to make sense for the devices, services, and people involved, with the intended boundaries clearly documented.',
                    'Consider the difference between describing a port by its number and describing it by its purpose. The second view helps connect configuration to an operational requirement. It also makes later review more useful. This is a perspective I value across infrastructure: technical detail should help explain what the system is meant to do.',
                ],
            },
            {
                id: 'why-the-foundation-keeps-mattering',
                heading: 'Why the foundation keeps mattering',
                paragraphs: [
                    'Completing this course created a focused milestone within my networking development. Its scope is narrower than the full specialization, and that is part of its value: it highlights deliberate attention to the access layer and the basic concepts that later routing, security, and automation work depend on.',
                    'My takeaway is to keep asking simple, specific questions even when the environment becomes complex. A clear understanding of the starting point makes it easier to identify where behavior diverges from expectations. That habit keeps my approach methodical: establish what should happen, examine the evidence, and turn a broad problem into a sequence of useful checks.',
                ],
            },
        ],
        takeaway: 'Good troubleshooting begins with a clear picture of what should happen, followed by a specific check that moves the investigation forward.',
        resources: [
            { label: 'Verify my Packt course certificate', url: 'https://www.coursera.org/account/accomplishments/verify/YTI55TPCZLTD' },
            { label: 'Explore Networking Fundamentals & Network Access', url: 'https://www.coursera.org/learn/packt-networking-fundamentals-network-access-uthia' },
        ],
    },
    {
        slug: 'cissp-specialization-security-perspective',
        credentialId: 'MF2JSNETUEEA',
        introduction: 'A security control has a technical configuration, but it also has a purpose: protecting something the organization values. Understanding both sides is central to how I approach my development as a security professional. On October 17, 2026, I completed Infosec’s eight-course CISSP specialization on Coursera, a learning milestone that connects technical decisions with the wider responsibilities of a security program.',
        sections: [
            {
                id: 'seeing-the-broader-security-program',
                heading: 'Seeing the broader security program',
                paragraphs: [
                    'My background includes enterprise systems, networking, identity, and automation. Each area offers a detailed view of how technology operates. A broad security learning path adds another perspective: how those systems relate to risk, ownership, policy, and the needs of the organization. That wider view helps give individual technical choices a meaningful context.',
                    'The specialization covered all eight CISSP domains, moving from security and risk management through asset protection, architecture, networks, identity, assessment, operations, and software development security. Completing the sequence created a structured way to connect subjects that are sometimes discussed separately, even though their consequences often overlap.',
                ],
            },
            {
                id: 'following-the-connections-between-domains',
                heading: 'Following the connections between domains',
                paragraphs: [
                    'Access management offers a useful example. Creating an account is a technical action, but deciding what it should be able to do involves the value of the information, the person’s responsibilities, and the organization’s rules. Reviewing that access later brings in oversight, evidence, and operational discipline. Several areas of security meet in one familiar workflow.',
                    'I find that connected perspective useful because it changes the questions worth asking. Who owns the decision? What needs protection? How will the control be reviewed? The technical implementation still matters, and its role becomes clearer when it is connected to the objective it is meant to support.',
                ],
            },
            {
                id: 'connecting-architecture-with-accountability',
                heading: 'Connecting architecture with accountability',
                paragraphs: [
                    'A thoughtful security design should be understandable to the people who maintain it and to the people who depend on it. That means being able to explain the requirement, the selected approach, and how its effectiveness will be checked. The same principle applies whether the discussion concerns identity, recovery, a network boundary, or a software change.',
                    'For my own work, this is a useful standard of communication. Technical detail should help someone understand the decision and their responsibility within it. A diagram, a procedure, or an automation tool becomes more useful when the assumptions are visible and the intended outcome is clear enough to review.',
                ],
            },
            {
                id: 'carrying-a-wider-perspective-forward',
                heading: 'Carrying a wider perspective forward',
                paragraphs: [
                    'Completing Infosec’s eight-course specialization through Coursera gave this learning journey a tangible milestone. Across the domains, the recurring theme was connection: assets to responsibilities, architecture to risk, and operations to evidence. Bringing those relationships into the same frame makes the broader security program easier to reason about.',
                    'The perspective I want to carry forward is straightforward: understand the system, understand what matters to the organization, and make the connection explicit. That is how continued study can support stronger professional judgment. For me, this milestone represents an investment in seeing security as a shared responsibility, with technical skill and clear reasoning working together to support it.',
                ],
            },
        ],
        takeaway: 'Security decisions become more useful when the technical control, the organizational purpose, and the responsibility for reviewing it are all clear.',
        resources: [
            { label: 'Verify my Infosec specialization certificate', url: 'https://www.coursera.org/account/accomplishments/specialization/MF2JSNETUEEA' },
            { label: 'Explore the eight-course CISSP specialization', url: 'https://www.coursera.org/specializations/cissp' },
        ],
    },
];

const editorial: Record<string, { title: string; excerpt: string }> = {
    LPI5QWR576C5: {
        title: 'From Security Alerts to Clearer Decisions: My Generative AI Learning Journey',
        excerpt: 'What completing IBM’s cybersecurity AI course taught me about useful automation, evidence, and keeping human judgment at the center of security work.',
    },
    '4SJ21Z507GDU': {
        title: 'Beyond Knowing the Answer: Building Sharper Cybersecurity Judgment',
        excerpt: 'My reflections on IBM’s Security+ and CySA+ assessment course, and the value of turning technical knowledge into clear, defensible decisions.',
    },
    AEWSM1Q1XSKS: {
        title: 'Following the Packet: My Journey Through the CCNA Learning Path',
        excerpt: 'Three courses, one connected perspective: how Packt’s networking specialization brings access, routing, security, and automation into the same picture.',
    },
    YTI55TPCZLTD: {
        title: 'The First Useful Question: Why Networking Fundamentals Still Matter',
        excerpt: 'A closer look at my Networking Fundamentals & Network Access milestone and the practical value of understanding how a connection begins.',
    },
    MF2JSNETUEEA: {
        title: 'From Technical Controls to Security Decisions: An Eight-Domain Learning Journey',
        excerpt: 'How completing Infosec’s CISSP specialization connects infrastructure knowledge with risk, accountability, and the purpose behind a security control.',
    },
};

export const courseraBlogPosts: BlogPost[] = certificationStories.map((story) => {
    const achievement = courseraAchievements.find((item) => item.credentialId === story.credentialId)!;
    const content = [
        story.introduction,
        ...story.sections.flatMap((section) => [`## ${section.heading}`, ...section.paragraphs]),
        story.takeaway,
    ].join('\n\n');

    return {
        id: `blog-coursera-${story.credentialId.toLowerCase()}`,
        slug: story.slug,
        ...editorial[story.credentialId],
        content,
        image: `/blog/certification-${story.slug}.svg`,
        date: '2026-11-20',
        category: 'certifications',
        tags: achievement.tags ?? [],
        author: { name: 'Rizwan Syed', avatar: '/about/rizwan.jpg' },
        readTime: String(Math.max(1, Math.ceil(content.split(/\s+/).length / 200))),
    };
});
