import { PortfolioData } from '@/types';
import { researchProjects } from '@/data/research-projects';

/**
 * Rizwan Syed — Portfolio Data
 * -----------------------------------------------------------------
 * IT Security Administrator with 4+ years of enterprise IT experience
 * spanning Windows/Linux infrastructure, virtualization, enterprise
 * networking, cybersecurity, SQL Server administration, and infrastructure
 * automation across hybrid and on-prem environments.
 *
 * NOTE: Employer-internal specifics (real IPs, hostnames, VLAN IDs,
 * internal filenames, private URLs) are intentionally sanitized in this
 * public dataset. Case studies describe the work, the stack, and the
 * outcome without exposing operational infrastructure.
 */
/**
 * FIXME: this profile URL currently returns 404 — replace it with the correct
 * Credly profile. It is the social link and the verification target for
 * credentials that have no personalized certificate scan (CISSP).
 */
const CREDLY_PROFILE_URL = 'https://www.credly.com/users/rizwan-syed.6b6ea3c9';

export const portfolioData: PortfolioData = {
    personal: {
        name: 'Rizwan Syed',
        title: 'IT Security Administrator',
        subtitle:
            'IT Security Administrator • Cybersecurity • Networks • Infrastructure • Automation • Cloud',
        bio: "IT Security Administrator with 4+ years of enterprise IT experience across cybersecurity, networks, servers, virtualization, and databases, supporting environments ranging from 800 to 1,700+ users while maintaining 99.9% uptime. What sets me apart is that I don't just operate infrastructure—I build tools to improve it. From centralized network management and monitoring to certificate lifecycle automation and SQL-backed RBAC platforms, I focus on turning complex, manual processes into secure, scalable, and reliable systems.",
        avatar: '/about/rizwan.jpg',
        location: 'New York, USA',
        email: 'syedsrizwansr@gmail.com',
        resumeUrl: '/resume',
        website: 'https://rizwansyed.dev',
        languages: [
            { name: 'English', level: 'Fluent' },
            { name: 'Telugu', level: 'Native' },
            { name: 'Hindi', level: 'Fluent' },
        ],
        socialLinks: [
            {
                platform: 'LinkedIn',
                url: 'https://linkedin.com/in/rizwan-syed-79b798211',
                icon: 'linkedin',
                username: 'Rizwan Syed',
            },
            {
                platform: 'GitHub',
                url: 'https://github.com/Riz777-star',
                icon: 'github',
                username: 'Riz777-star',
            },
            {
                platform: 'Instagram',
                url: 'https://www.instagram.com/rizwan_syed_77/',
                icon: 'instagram',
                username: 'rizwan_syed_77',
            },
            {
                platform: 'Credly',
                url: CREDLY_PROFILE_URL,
                icon: 'award',
                username: 'Rizwan Syed',
            },
            {
                platform: 'Email',
                url: 'mailto:syedsrizwansr@gmail.com',
                icon: 'mail',
                username: 'syedsrizwansr@gmail.com',
            },
        ],
    },

    // -----------------------------------------------------------------
    // PROJECTS — standalone, vendor-neutral security systems
    // -----------------------------------------------------------------
    projects: researchProjects,

    // -----------------------------------------------------------------
    // EXPERIENCE — from resume
    // -----------------------------------------------------------------
    experiences: [
        {
            id: 'exp-koike',
            company: 'Koike Aronson, Inc.',
            position: 'IT Security Administrator',
            description:
                'Lead and manage enterprise infrastructure across multi-site environments supporting 800+ users — networks, servers, VMware, backups, security, SQL Server, and internal application development.',
            responsibilities: [
                'Administer Windows and Linux servers, Active Directory, DNS, DHCP, and Group Policy in a hybrid identity environment (Microsoft Entra ID).',
                'Manage a VMware environment supporting 100+ VMs with HA, DRS, and resource optimization.',
                'Lead network operations: VLAN configuration, firewall policy management (Palo Alto), routing, and secure connectivity.',
                'Implement and manage Veeam backup and disaster recovery, strengthening RPO/RTO and data protection.',
                'Monitor infrastructure with enterprise tools (ManageEngine Log360, EventLog Analyzer, SNMP, syslog), proactively resolving performance bottlenecks.',
                'Serve as escalation point for complex infrastructure and network issues, coordinating with vendors and internal teams.',
                'Lead infrastructure upgrades and modernization initiatives to improve reliability and operational efficiency.',
                'Administer Microsoft SQL Server: backups, performance monitoring, and maintenance for enterprise applications.',
                'Support secure remote access and enforce security best practices across systems and networks.',
                'Lead maintenance windows and after-hours operations with minimal service disruption.',
                'Maintain architecture diagrams, SOPs, and operational documentation.',
                'Design secure internal automation and role-controlled workflows while keeping employer systems and architecture confidential.',
            ],
            skills: [
                'Windows Server', 'Linux', 'Active Directory', 'Group Policy', 'DNS', 'DHCP',
                'VMware vSphere', 'Hyper-V', 'Microsoft Entra ID', 'Microsoft 365', 'Intune',
                'Exchange Online', 'Microsoft SQL Server', 'Veeam',
                'Palo Alto', 'Dell SONiC', 'VLANs', 'Switching', 'Routing', 'Firewall',
                'SentinelOne', 'ManageEngine', 'PowerShell', 'Python', 'RBAC', 'PKI',
            ],
            startDate: '2025-05-01',
            isOngoing: true,
            location: 'New York, USA',
            type: 'full-time',
            logo: '/logos/koike.png',
            logoBg: 'bg-white',
            impact: [
                'Improved infrastructure operations through secure automation and standardized workflows.',
                'Resolved cross-domain performance incidents spanning applications, databases, and infrastructure.',
                'Reduced monitoring noise through alert correlation and operational tuning.',
            ],
            keyLearnings: [
                'Internal tooling beats scripts when multiple humans need to operate the same system safely.',
                'Cross-domain incidents (SQL + app + network) resolve fastest when one person can read all layers.',
            ],
        },

        {
            id: 'exp-holiday',
            company: 'Holiday Channel',
            position: 'Infrastructure and Systems Engineer',
            description:
                'Managed enterprise infrastructure — servers, storage, networks — across a distributed environment, with hybrid cloud integration and Veeam-based backup/recovery.',
            responsibilities: [
                'Administered Active Directory, RBAC, and identity lifecycle across hybrid cloud.',
                'Supported switching, routing, firewall configuration, and secure connectivity.',
                'Maintained Veeam backup and recovery ensuring data integrity and availability.',
                'Monitored infrastructure performance and drove cross-functional resolution of system issues.',
                'Supported Azure-based workloads and hybrid services to improve scalability and availability.',
                'Documented system configurations, network topology, and operational procedures.',
            ],
            skills: [
                'Windows Server', 'Active Directory', 'RBAC', 'Azure', 'Hybrid Cloud',
                'Veeam', 'Switching', 'Routing', 'Firewall', 'Monitoring', 'Documentation',
            ],
            startDate: '2024-10-01',
            endDate: '2025-05-01',
            isOngoing: false,
            location: 'New York, USA',
            type: 'full-time',
            logo: '/logos/holiday-channel.png',
            logoBg: 'bg-white',
        },

        {
            id: 'exp-ub',
            company: 'University at Buffalo',
            position: 'Infrastructure and Systems',
            description:
                'Administered HPC infrastructure — compute clusters and distributed storage — and supported service delivery to faculty, researchers, and students in a high-demand academic environment.',
            responsibilities: [
                'Administered HPC infrastructure including compute clusters and distributed storage systems.',
                'Managed NFS storage and optimized system performance for research workloads.',
                'Ensured high availability and reliability for academic and research systems.',
                'Collaborated with academic departments and IT teams to troubleshoot complex infrastructure issues.',
                'Supported service delivery for faculty, researchers, and students in a high-demand environment.',
                'Implemented monitoring and performance improvements to enhance system efficiency.',
                'Partnered with research teams to troubleshoot and resolve performance bottlenecks.',
            ],
            skills: [
                'HPC', 'Linux', 'NFS', 'Storage', 'Monitoring',
                'Performance Tuning', 'Academic IT', 'Support',
            ],
            startDate: '2024-01-01',
            endDate: '2024-09-30',
            isOngoing: false,
            location: 'Buffalo, New York, USA',
            type: 'part-time',
            logo: '/logos/university-at-buffalo.jpg',
            logoBg: 'bg-[#005BBB]',
        },

        {
            id: 'exp-vaya',
            company: 'Vaya Group',
            position: 'Systems and Network Administrator',
            description:
                'Managed enterprise servers and network infrastructure — switching, routing, firewalls, VLANs — along with Active Directory, DNS, DHCP, and user provisioning.',
            responsibilities: [
                'Managed enterprise servers and network infrastructure: switching, routing, firewalls, VLANs.',
                'Administered Active Directory, DNS, DHCP, and user provisioning workflows.',
                'Implemented infrastructure monitoring solutions to improve visibility and uptime.',
                'Troubleshot system and network issues, reducing downtime and improving reliability.',
                'Maintained technical documentation, SOPs, and operational procedures.',
            ],
            skills: [
                'Windows Server', 'Active Directory', 'DNS', 'DHCP', 'Switching', 'Routing',
                'Firewall', 'VLANs', 'Monitoring', 'Documentation',
            ],
            startDate: '2022-06-01',
            endDate: '2023-05-31',
            isOngoing: false,
            location: 'Hyderabad, India',
            type: 'full-time',
            logo: '/logos/vaya-group.jpg',
            logoBg: 'bg-white',
        },
    ],

    // -----------------------------------------------------------------
    // EDUCATION
    // -----------------------------------------------------------------
    education: [
        {
            id: 'edu-1',
            institution: 'University at Buffalo, The State University of New York',
            degree: 'Master of Science',
            major: 'Computer Science',
            startDate: '2023-01-15',
            endDate: '2024-12-15',
            isOngoing: false,
            activities: [
                'Graduate research and coursework in database systems, distributed systems, and machine learning.',
                'Built Taco-DB — a working C++ relational database engine — as coursework.',
                'iOS real-time object detection app (ResNet50 → TFLite → Core ML).',
            ],
        },
        {
            id: 'edu-2',
            institution: 'Sathyabama Institute of Science and Technology',
            degree: 'Bachelor of Engineering',
            major: 'Computer Science & Engineering',
            startDate: '2018-08-01',
            endDate: '2022-05-31',
            isOngoing: false,
            achievements: [
                'Published: "Face Mask Detection with Alarm using Machine Learning" — IRJMETS, Volume 05, Issue 03, March 2023. DOI: 10.56726/IRJMETS34706',
                'Final-year project recognized as an innovative CV + Deep Learning solution combining CNN mask detection and YOLOv3 social distancing.',
            ],
        },
    ],

    // -----------------------------------------------------------------
    // ACHIEVEMENTS — certifications + publications
    // -----------------------------------------------------------------
    achievements: [
        {
            id: 'cert-cissp',
            title: 'Certified Information Systems Security Professional (CISSP)',
            issuer: 'ISC2',
            date: '2026-07-01',
            description: 'Globally recognized advanced-level certification covering security architecture, risk management, IAM, cryptography, and security operations. Expires Jul 2029.',
            image: '/certificates/cissp.jpg',
            credentialUrl: CREDLY_PROFILE_URL,
            tags: ['Cybersecurity', 'Governance', 'Risk', 'IAM'],
            type: 'certification',
            category: 'certification',
        },
        {
            id: 'cert-aws-saa',
            title: 'AWS Certified Solutions Architect – Associate',
            issuer: 'Amazon Web Services',
            date: '2025-02-01',
            description: 'AWS foundational architecture certification covering compute, storage, networking, security, and cost optimization. Valid Feb 2025 – Feb 2028.',
            credentialUrl: 'https://www.credly.com/badges/a0739f30-6d6a-4d00-ae99-96f5e50e39ba/linked_in_profile',
            image: '/certificates/aws-solutions-architect-associate.png',
            tags: ['AWS', 'Cloud', 'Architecture'],
            type: 'certification',
            category: 'certification',
        },
        {
            id: 'cert-ms-wshab',
            title: 'Microsoft Certified: Windows Server Hybrid Administrator',
            issuer: 'Microsoft',
            date: '2025-06-01',
            description: 'Windows Server administration across on-prem and hybrid Azure environments — AD DS, identity, storage, networking, high availability.',
            tags: ['Microsoft', 'Windows Server', 'Hybrid Cloud'],
            type: 'certification',
            category: 'certification',
        },
        {
            id: 'cert-az-900',
            title: 'Microsoft Azure Fundamentals (AZ-900)',
            issuer: 'Microsoft',
            date: '2024-08-01',
            description: 'Foundational Azure knowledge — core services, pricing, SLA, lifecycle, and governance.',
            tags: ['Microsoft', 'Azure', 'Cloud'],
            type: 'certification',
            category: 'certification',
        },
        {
            id: 'cert-rhce',
            title: 'Red Hat Certified Engineer (RHCE)',
            issuer: 'Red Hat',
            date: '2024-04-01',
            description: 'Advanced Linux system administration and automation with Ansible on Red Hat Enterprise Linux.',
            tags: ['Linux', 'RHEL', 'Ansible', 'Automation'],
            type: 'certification',
            category: 'certification',
        },
        {
            id: 'cert-angular',
            title: 'Angular Certified Training',
            issuer: 'Credo Systemz',
            date: '2021-11-07',
            description: 'Certificate of Excellence for Angular application development, covering components, RxJS, and modular architecture. Course conducted September–November 2021.',
            image: '/certificates/angular-credo-systemz.png',
            tags: ['Angular', 'TypeScript', 'Frontend'],
            type: 'certification',
            category: 'certification',
        },
        {
            id: 'cert-zoho',
            title: 'Create and Operate Business Apps Using Zoho Creator',
            issuer: 'Directorate General of Training, Govt. of India — NSTI Chennai (Zoho COE)',
            date: '2019-09-21',
            description: 'Certificate of Proficiency issued under the Ministry of Skill Development and Entrepreneurship. One-week training in building and operating line-of-business applications on Zoho Creator.',
            image: '/certificates/zoho-creator-nsti.png',
            tags: ['Business Apps', 'Low-Code', 'Zoho Creator'],
            type: 'certification',
            category: 'certification',
        },
        {
            id: 'cert-iot',
            title: 'Internet of Things Internship — IoT Analytics in Energy Management',
            issuer: 'SmartBridge Educational Services (SmartInternz)',
            date: '2020-12-08',
            credentialId: 'SB20200080942',
            credentialUrl:
                'https://smartinternz.com/internships/certificates/868d90a0921ac7b024b47d672445a086',
            description: 'Internship September–December 2020 covering IoT fundamentals — sensors, protocols, edge computing, and cloud integration — culminating in the project "IoT Analytics in Energy Management".',
            image: '/certificates/iot-smartbridge.png',
            tags: ['IoT', 'Embedded Systems', 'Analytics'],
            type: 'certification',
            category: 'certification',
        },
        {
            id: 'pub-face-mask',
            title: 'Face Mask Detection with Alarm using Machine Learning',
            issuer: 'IRJMETS — Volume 05, Issue 03, March 2023',
            date: '2023-03-01',
            description: 'Peer-reviewed publication. Combines CNN-based mask detection with YOLOv3 social-distancing measurement and a real-time alarm pipeline. Impact Factor 7.868.',
            credentialUrl: 'https://www.doi.org/10.56726/IRJMETS34706',
            credentialId: 'DOI: 10.56726/IRJMETS34706',
            tags: ['Publication', 'ML', 'Computer Vision', 'CNN', 'YOLOv3'],
            type: 'publication',
            category: 'publication',
        },
    ],

    // -----------------------------------------------------------------
    // TECH STACK (locally stored brand icons)
    // -----------------------------------------------------------------
    techStack: [
        { name: 'Windows Server', icon: '/skills/windows.svg', category: 'tool' },
        { name: 'Linux', icon: '/skills/linux.svg', category: 'tool' },
        { name: 'Red Hat', icon: '/skills/redhat.svg', category: 'tool' },
        { name: 'Ubuntu', icon: '/skills/ubuntu.svg', category: 'tool' },
        { name: 'VMware', icon: '/skills/vmware.svg', category: 'cloud' },
        { name: 'Microsoft Azure', icon: '/skills/azure.svg', category: 'cloud' },
        { name: 'Amazon AWS', icon: '/skills/aws.svg', category: 'cloud' },
        { name: 'Microsoft 365', icon: '/skills/microsoft365.svg', category: 'cloud' },
        { name: 'Active Directory', icon: '/skills/microsoft.svg', category: 'tool' },
        { name: 'Microsoft SQL Server', icon: '/skills/sqlserver.svg', category: 'database' },
        { name: 'PostgreSQL', icon: '/skills/postgresql.svg', category: 'database' },
        { name: 'MySQL', icon: '/skills/mysql.svg', category: 'database' },
        { name: 'PowerShell', icon: '/skills/powershell.svg', category: 'language' },
        { name: 'Python', icon: '/skills/python.svg', category: 'language' },
        { name: 'Java', icon: '/skills/java.svg', category: 'language' },
        { name: 'Bash', icon: '/skills/bash.svg', category: 'language' },
        { name: 'C++', icon: '/skills/cplusplus.svg', category: 'language' },
        { name: 'Swift', icon: '/skills/swift.svg', category: 'language' },
        { name: 'FastAPI', icon: '/skills/fastapi.svg', category: 'framework' },
        { name: 'Ansible', icon: '/skills/ansible.svg', category: 'tool' },
        { name: 'Docker', icon: '/skills/docker.svg', category: 'tool' },
        { name: 'Kubernetes', icon: '/skills/kubernetes.svg', category: 'tool' },
        { name: 'Terraform', icon: '/skills/terraform.svg', category: 'tool' },
        { name: 'Open Policy Agent', icon: '/skills/opa.svg', category: 'tool' },
        { name: 'Apache Kafka', icon: '/skills/kafka.svg', category: 'tool' },
        { name: 'Redis', icon: '/skills/redis.svg', category: 'database' },
        { name: 'Prometheus', icon: '/skills/prometheus.svg', category: 'tool' },
        { name: 'Grafana', icon: '/skills/grafana.svg', category: 'tool' },
        { name: 'Nagios', icon: '/skills/nagios.svg', category: 'tool' },
        { name: 'Zabbix', icon: '/skills/zabbix.svg', category: 'tool' },
        { name: 'Wireshark', icon: '/skills/wireshark.svg', category: 'tool' },
        { name: 'Veeam', icon: '/skills/veeam.svg', category: 'tool' },
        { name: 'Palo Alto Networks', icon: '/skills/paloalto.svg', category: 'tool' },
        { name: 'SentinelOne', icon: '/skills/sentinelone.svg', category: 'tool' },
        { name: 'Git', icon: '/skills/git.svg', category: 'tool' },
        { name: 'GitHub', icon: '/skills/github.svg', category: 'tool' },
    ],

    // -----------------------------------------------------------------
    // HARD SKILLS
    // -----------------------------------------------------------------
    hardSkills: [
        // Cloud / hybrid
        { name: 'Microsoft Azure', level: 'advanced', category: 'cloud', icon: '/skills/azure.svg', description: 'Entra ID, Intune, hybrid identity, Azure VMs, storage, and resource governance.' },
        { name: 'Microsoft 365 Administration', level: 'expert', category: 'cloud', icon: '/skills/microsoft365.svg', description: 'Tenant administration across Exchange Online, SharePoint, Teams, security, and compliance.' },
        { name: 'Microsoft Entra ID', level: 'advanced', category: 'cloud', icon: '/skills/azure.svg', description: 'Hybrid identity, access policies, authentication, enterprise apps, and identity lifecycle.' },
        { name: 'Microsoft Intune', level: 'advanced', category: 'cloud', icon: '/skills/intune.svg', description: 'Endpoint enrollment, compliance, configuration profiles, application delivery, and device security.' },
        { name: 'Exchange Online', level: 'expert', category: 'cloud', icon: '/skills/exchange.svg', description: 'Mail flow, delegation, shared mailboxes, transport tracing, quarantine, retention, and PowerShell.' },
        { name: 'AWS Architecture', level: 'intermediate', category: 'cloud', icon: '/skills/aws.svg', description: 'AWS Solutions Architect Associate knowledge across compute, storage, networking, IAM, and resilience.' },

        // Infrastructure / systems
        { name: 'Windows Server', level: 'expert', category: 'devops', icon: '/skills/windows.svg', description: 'Server 2016/2019/2022 administration, roles, services, patching, hardening, and troubleshooting.' },
        { name: 'Linux Administration', level: 'advanced', category: 'devops', icon: '/skills/linux.svg', description: 'RHEL, Ubuntu, and CentOS administration with systemd, packages, shell automation, and hardening.' },
        { name: 'VMware vSphere', level: 'advanced', category: 'cloud', icon: '/skills/vmware.svg', description: 'Multi-host virtualization, HA, DRS, resource pools, capacity, and VM lifecycle management.' },
        { name: 'Microsoft Hyper-V', level: 'advanced', category: 'cloud', icon: '/skills/windows.svg', description: 'Windows-native virtualization for lab and production workloads.' },
        { name: 'Active Directory Domain Services', level: 'expert', category: 'devops', icon: '/skills/microsoft.svg', description: 'Users, computers, OU design, groups, delegation, service accounts, and identity troubleshooting.' },
        { name: 'Group Policy & LAPS', level: 'expert', category: 'devops', icon: '/skills/windows.svg', description: 'GPO design and scoping, security baselines, kiosk policy, AppLocker, LAPS, and registry configuration.' },
        { name: 'DNS & DHCP', level: 'advanced', category: 'devops', icon: '/skills/windows.svg', description: 'Enterprise name resolution, addressing, reservations, scopes, options, and layered troubleshooting.' },
        { name: 'HPC & NFS Storage', level: 'intermediate', category: 'devops', icon: '/skills/linux.svg', description: 'Compute clusters, NFS storage, and performance support for research workloads.' },
        { name: 'Veeam Backup & Replication', level: 'advanced', category: 'devops', icon: '/skills/veeam.svg', description: 'Backup design, monitoring, recovery testing, replication, failover, and disaster-recovery planning.' },

        // Networking
        { name: 'Enterprise Networking', level: 'advanced', category: 'other', icon: '/skills/cisco.svg', description: 'TCP/IP, LAN/WAN, Ethernet, switching, routing, NAT, DNS, DHCP, PoE, and Layer 2/3 troubleshooting.' },
        { name: 'Palo Alto Firewalls', level: 'advanced', category: 'other', icon: '/skills/paloalto.svg', description: 'Security policy, application control, URL filtering, NAT, traffic analysis, and secure connectivity.' },
        { name: 'Dell SONiC Switching', level: 'advanced', category: 'other', icon: '/skills/dell.svg', description: 'VLANs, access and trunk ports, PoE, interface state, CLI operations, SNMP, and syslog.' },
        { name: 'VLANs & Network Segmentation', level: 'advanced', category: 'other', icon: '/skills/cisco.svg', description: 'Least-privilege segmentation for users, servers, management, printers, and security systems.' },
        { name: 'VPN & Secure Remote Access', level: 'advanced', category: 'other', icon: '/skills/wireguard.svg', description: 'Remote connectivity, access troubleshooting, authentication, and secure support workflows.' },
        { name: 'Wireshark & Traffic Analysis', level: 'advanced', category: 'other', icon: '/skills/wireshark.svg', description: 'Packet capture, protocol analysis, connection troubleshooting, and network evidence collection.' },
        { name: 'SNMP & Syslog', level: 'advanced', category: 'other', icon: '/skills/prometheus.svg', description: 'Network telemetry, device health, centralized logging, alerting, and operational diagnostics.' },

        // Security
        { name: 'Cybersecurity Operations', level: 'advanced', category: 'other', icon: '/skills/cloudflare.svg', description: 'Endpoint, server, identity, email, and network security monitoring with evidence-driven response.' },
        { name: 'SentinelOne EDR', level: 'advanced', category: 'other', icon: '/skills/sentinelone.svg', description: 'Endpoint and server protection, alert investigation, exclusions, scans, agent health, and threat response.' },
        { name: 'SIEM & Log Analysis', level: 'advanced', category: 'other', icon: '/skills/grafana.svg', description: 'ManageEngine Log360, EventLog Analyzer, ADAudit Plus, Windows events, correlation, and alert tuning.' },
        { name: 'Incident Response & RCA', level: 'advanced', category: 'other', icon: '/skills/cloudflare.svg', description: 'Structured triage, containment, cross-domain root-cause analysis, recovery validation, and documentation.' },
        { name: 'Identity, RBAC & MFA', level: 'advanced', category: 'other', icon: '/skills/auth0.svg', description: 'Least privilege, role design, delegated administration, multifactor authentication, and audit readiness.' },
        { name: 'Zero Trust & Contextual Access', level: 'intermediate', category: 'other', icon: '/skills/keycloak.svg', description: 'Research and prototype design for adaptive risk, RBAC/ABAC, policy decisions, and continuous verification.' },
        { name: 'PKI & Certificate Management', level: 'advanced', category: 'other', icon: '/skills/letsencrypt.svg', description: 'Certificate requests, internal CA workflows, lifecycle tracking, HTTPS deployment, and store hygiene.' },
        { name: 'Immutable Backup Security', level: 'intermediate', category: 'other', icon: '/skills/veeam.svg', description: 'Research architecture for isolated repositories, retention locks, integrity validation, and restore drills.' },

        // Databases
        { name: 'Microsoft SQL Server', level: 'advanced', category: 'database', icon: '/skills/sqlserver.svg', description: 'Backups, maintenance, performance monitoring, T-SQL, permissions, and application databases.' },
        { name: 'PostgreSQL', level: 'intermediate', category: 'database', icon: '/skills/postgresql.svg', description: 'Relational modeling and persistence for research prototypes, APIs, audit records, and policy data.' },

        // Automation / dev
        { name: 'PowerShell Automation', level: 'expert', category: 'software', icon: '/skills/powershell.svg', description: 'Automation across AD, Exchange, endpoints, registry, services, deployments, and diagnostics.' },
        { name: 'Python', level: 'advanced', category: 'backend', icon: '/skills/python.svg', description: 'Backend services, security tooling, collectors, automation, data processing, and ML experimentation.' },
        { name: 'FastAPI & REST APIs', level: 'advanced', category: 'backend', icon: '/skills/fastapi.svg', description: 'Typed backend APIs, authentication, policy integration, validation, and database-backed services.' },
        { name: 'Bash & Shell Scripting', level: 'advanced', category: 'software', icon: '/skills/bash.svg', description: 'Linux administration, diagnostics, task automation, and repeatable operational workflows.' },
        { name: 'Ansible', level: 'advanced', category: 'software', icon: '/skills/ansible.svg', description: 'Configuration automation, repeatable infrastructure changes, and Red Hat administration.' },
        { name: 'Docker', level: 'intermediate', category: 'software', icon: '/skills/docker.svg', description: 'Isolated development environments and reproducible security research prototypes.' },
        { name: 'Kubernetes', level: 'intermediate', category: 'software', icon: '/skills/kubernetes.svg', description: 'Research environments for policy enforcement, service recovery, and container orchestration.' },
        { name: 'Terraform', level: 'intermediate', category: 'software', icon: '/skills/terraform.svg', description: 'Infrastructure-as-code concepts for repeatable labs, recovery environments, and cloud resources.' },
        { name: 'Open Policy Agent', level: 'intermediate', category: 'software', icon: '/skills/opa.svg', description: 'Policy-as-code research for explainable Zero Trust and contextual authorization prototypes.' },
        { name: 'Kafka & Event Streaming', level: 'intermediate', category: 'backend', icon: '/skills/kafka.svg', description: 'Research architectures for continuous telemetry, session risk, and closed-loop cyber response.' },
        { name: 'Security Machine Learning', level: 'intermediate', category: 'ai', icon: '/skills/scikitlearn.svg', description: 'Anomaly classification, cross-dataset evaluation, risk signals, model transparency, and false-positive analysis.' },

        // Monitoring / ops
        { name: 'Monitoring & Observability', level: 'advanced', category: 'devops', icon: '/skills/prometheus.svg', description: 'Infrastructure health, metrics, logs, alerting, dashboards, Nagios, Zabbix, and operational telemetry.' },
    ],

    // -----------------------------------------------------------------
    // SOFT SKILLS
    // -----------------------------------------------------------------
    softSkills: [
        { name: 'Ownership', description: 'Take end-to-end responsibility for infrastructure — from design to on-call.' },
        { name: 'Cross-team collaboration', description: 'Work with engineering, HR, finance, and vendors to deliver reliable IT outcomes.' },
        { name: 'Documentation', description: 'Runbooks, SOPs, architecture diagrams — because tribal knowledge is a bug.' },
        { name: 'Incident response', description: 'Calm, systematic RCA under pressure.' },
        { name: 'Communication', description: 'Translate infrastructure impact into language non-technical stakeholders act on.' },
        { name: 'Problem solving', description: 'Cross-domain: SQL + app + network + user workflow in a single investigation.' },
        { name: 'Continuous learning', description: 'CISSP → AWS SAA → RHCE → Azure — always the next depth level.' },
        { name: 'Mentorship', description: 'Onboard and level up peers on Windows, networking, and PowerShell.' },
        { name: 'Time management', description: 'Balance planned modernization work against on-call and incident response.' },
        { name: 'Service mindset', description: 'IT exists so users can do their jobs — treat every ticket as a real user problem.' },
    ],

    // -----------------------------------------------------------------
    // TOOLS
    // -----------------------------------------------------------------
    tools: [
        { name: 'VS Code', icon: '/skills/vscode.svg', category: 'ide' },
        { name: 'PowerShell ISE', icon: '/skills/powershell.svg', category: 'ide' },
        { name: 'SSMS', icon: '/skills/sqlserver.svg', category: 'ide' },
        { name: 'Git', icon: '/skills/git.svg', category: 'devops' },
        { name: 'GitHub', icon: '/skills/github.svg', category: 'devops' },
        { name: 'ManageEngine', icon: '/skills/zoho.svg', category: 'devops' },
        { name: 'Veeam', icon: '/skills/veeam.svg', category: 'devops' },
        { name: 'Wireshark', icon: '/skills/wireshark.svg', category: 'devops' },
        { name: 'Docker', icon: '/skills/docker.svg', category: 'devops' },
        { name: 'Ansible', icon: '/skills/ansible.svg', category: 'devops' },
        { name: 'Terraform', icon: '/skills/terraform.svg', category: 'devops' },
        { name: 'Grafana', icon: '/skills/grafana.svg', category: 'devops' },
        { name: 'Keycloak', icon: '/skills/keycloak.svg', category: 'devops' },
        { name: 'Microsoft Teams', icon: '/skills/teams.svg', category: 'communication' },
        { name: 'Slack', icon: '/skills/slack.svg', category: 'communication' },
    ],

    // -----------------------------------------------------------------
    // FAQs (defined but locale overrides on contact page)
    // -----------------------------------------------------------------
    faqs: [
        {
            question: 'What kind of role are you looking for?',
            answer:
                'IT Security Administrator, Infrastructure Engineer, or hybrid roles that combine core systems / networking / security with internal platform development.',
        },
        {
            question: 'What size of environments do you support?',
            answer:
                'Multi-site enterprise environments — 800 to 1,700+ users, 100+ VMs, Windows/Linux mix, hybrid Entra ID identity, VMware + Hyper-V, and enterprise networking.',
        },
        {
            question: 'What\'s your biggest differentiator?',
            answer:
                'I don\'t just maintain infrastructure — I build tools to manage it. Centralized switch management, monitoring, certificate lifecycle, and internal platforms backed by SQL Server, with RBAC and audit built in from day one.',
        },
    ],

    // -----------------------------------------------------------------
    // BLOG
    // -----------------------------------------------------------------
    blogs: [
        {
            id: 'blog-face-mask-paper',
            slug: 'face-mask-detection-with-alarm',
            title: 'Face Mask Detection with Alarm using Machine Learning',
            excerpt:
                'A published computer-vision system combining CNN-based mask classification, YOLOv3 social-distance analysis, and real-time visual and audible alerts.',
            content:
                '# Face Mask Detection with Alarm using Machine Learning\n\nPublished in IRJMETS, Volume 05, Issue 03, March 2023.\n\nThe system combines a MobileNet-based convolutional neural network for mask classification with YOLOv3 person detection and Euclidean-distance analysis. Video frames are processed in real time using OpenCV. When the pipeline detects a person without a mask or identifies unsafe distancing, it highlights the violation and activates an alarm.\n\nThe project demonstrates how lightweight deep-learning models can turn a standard camera feed into an automated public-health monitoring tool.\n\nDOI: 10.56726/IRJMETS34706',
            image: '/blog/face-mask-detection.svg',
            date: '2023-03-01',
            category: 'Research',
            tags: ['Machine Learning', 'Computer Vision', 'CNN', 'MobileNet', 'YOLOv3', 'OpenCV'],
            author: { name: 'Rizwan Syed', avatar: '/about/rizwan.jpg' },
            readTime: '6',
        },
    ],

    // -----------------------------------------------------------------
    // GALLERY
    // -----------------------------------------------------------------
    gallery: [
        {
            id: 'gallery-masters-journey',
            title: 'The Masters Journey Begins',
            description:
                'Chennai International Airport, one-way ticket in hand. The night everything shifted from plan to progress.',
            date: '2023-08-12',
            type: 'image',
            url: '/gallery/masters-journey-begins.jpg',
            category: 'Milestones',
        },
        {
            id: 'gallery-ub-graduation',
            title: 'University at Buffalo — Class of 2025',
            description:
                'M.S. in Computer Science. Two years of coursework, lab work, and campus network support, signed off.',
            date: '2025-05-16',
            type: 'image',
            url: '/gallery/ub-graduation-2025.jpg',
            category: 'Milestones',
        },
        {
            id: 'gallery-koike-nasa',
            title: 'Spacecraft Integration Bay',
            description:
                'A Koike positioner under a spacecraft during payload integration. Precision equipment doing quiet work at the edge of a launch campaign.',
            date: '2025-07-01',
            type: 'image',
            url: '/gallery/koike-nasa-spacecraft.jpg',
            category: 'Work',
        },
        {
            id: 'gallery-nasa-koike-positioner',
            title: 'NASA Spacecraft Positioning System',
            description:
                'A large Koike positioning system supporting spacecraft integration work inside a controlled assembly facility.',
            date: '2025-07-01',
            type: 'image',
            url: '/gallery/nasa-koike-positioner.jpg',
            category: 'Work',
        },
        {
            id: 'gallery-nasa-koike-integration',
            title: 'Spacecraft Integration on Koike Equipment',
            description:
                'A spacecraft mounted on Koike equipment during integration, demonstrating the scale and precision of the positioning platform.',
            date: '2025-07-01',
            type: 'image',
            url: '/gallery/nasa-koike-integration.jpg',
            category: 'Work',
        },
        {
            id: 'gallery-aws-niagara',
            title: 'American Welding Society — Niagara Frontier Section',
            description:
                'Section gathering hosted at Koike Aronson. Good reminder that the infrastructure I run exists to keep people like this working.',
            date: '2025-09-10',
            type: 'image',
            url: '/gallery/aws-niagara-frontier-section.jpg',
            category: 'Work',
        },
        {
            id: 'gallery-rainbow',
            title: 'Rainbow Hits Different',
            description:
                'Full arc over an open field in upstate New York. Some evenings the commute pays you back.',
            date: '2025-08-20',
            type: 'image',
            url: '/gallery/rainbow-hits-different.jpg',
            category: 'Life',
        },
    ],
};
