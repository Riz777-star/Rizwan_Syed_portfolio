import type { Project } from '@/types';

/**
 * Standalone cybersecurity engineering projects.
 *
 * These vendor-neutral prototypes are intentionally marked as planned and do
 * not represent production deployments or disclose employer infrastructure.
 */
export const researchProjects: Project[] = [
    {
        id: 'research-project-1',
        slug: 'adaptive-zero-trust-risk-engine',
        title: 'Adaptive Zero Trust Risk Engine',
        image: '/project/adaptivezerotrustriskengine1.webp',
        description:
            'An adaptive access-control platform that combines identity assurance, device posture, network activity, user behavior, and resource sensitivity into an explainable risk score for every request and active session.',
        longDescription:
            'The platform continuously evaluates access rather than treating successful authentication as permanent trust. It normalizes signals from identity, endpoint, network, session, and resource systems, then combines deterministic policy with an ML-derived anomaly signal. A central policy decision point maps the result to allow, step-up authentication, restricted access, or deny, while distributed enforcement points apply the decision. Every outcome includes an auditable explanation, policy version, contributing factors, and confidence level.',
        techStack: ['Python', 'FastAPI', 'scikit-learn', 'Open Policy Agent', 'PostgreSQL'],
        tools: ['Docker', 'Jupyter', 'UNSW-NB15', 'CSE-CIC-IDS2018'],
        status: 'planned',
        startDate: '2026-09-01',
        role: 'Security architecture and backend engineering',
        customTimeline: 'Architecture • Build roadmap',
        team: 'Independent project',
        highlights: [
            'Five-dimensional risk model: identity, device, network, behavior, and resource sensitivity',
            'Graduated decisions instead of binary allow/deny enforcement',
            'Explainable decision record showing which signals changed the outcome',
            'Evaluation plan covers accuracy, false-positive rate, latency, throughput, CPU, and memory',
        ],
        category: 'Zero Trust Security',
        features: [
            {
                title: 'Decision Pipeline',
                items: [
                    '**Normalize context** from identity, endpoint, network, session, and resource sources.',
                    '**Score access risk** with configurable weights and an ML-derived network-risk signal.',
                    '**Enforce policy** through a separate PDP/PEP design with auditable outcomes.',
                ],
            },
        ],
        challengesAndSolutions: [
            {
                problem: 'Allowing an opaque model to directly authorize access creates unacceptable operational risk.',
                solution: 'Keep ML advisory, combine it with deterministic policy, and record a human-readable explanation for every decision.',
            },
        ],
    },
    {
        id: 'research-project-2',
        slug: 'continuous-session-trust-monitor',
        title: 'Continuous Session Trust Monitor',
        image: '/project/continuoussessiontrustmonitor1.webp',
        description:
            'A real-time session-security service that consumes live telemetry, recalculates trust when conditions change, and safely challenges, restricts, restores, or terminates access without waiting for a new login.',
        longDescription:
            'The service extends Zero Trust beyond login-time checks by monitoring device compliance, behavioral changes, network anomalies, and new threat intelligence throughout an active session. A streaming pipeline correlates events to the correct identity and session, updates the risk state, and passes it through a policy state machine. Hysteresis, sustained-threshold windows, and cooldown controls prevent unstable decisions, while event replay and a complete risk timeline make every intervention explainable.',
        techStack: ['Python', 'Apache Kafka', 'Redis', 'OpenTelemetry', 'Open Policy Agent'],
        tools: ['Docker Compose', 'Grafana', 'Synthetic Identity Lab'],
        status: 'planned',
        startDate: '2026-09-01',
        role: 'Streaming architecture and policy design',
        customTimeline: 'Streaming design • Build roadmap',
        team: 'Independent project',
        highlights: [
            'Continuous trust re-evaluation after initial authentication',
            'Session state machine for allow, challenge, restrict, and terminate actions',
            'Hysteresis and cooldown controls to prevent policy oscillation',
            'Evaluation measures decision latency, event throughput, and false interventions',
        ],
        category: 'Identity Security',
        challengesAndSolutions: [
            {
                problem: 'Rapidly changing scores can repeatedly challenge or disconnect legitimate users.',
                solution: 'Use sustained-threshold windows, cooldown periods, and severity-aware transitions before enforcement.',
            },
        ],
    },
    {
        id: 'research-project-3',
        slug: 'cross-dataset-threat-benchmark',
        title: 'Cross-Dataset Threat Detection Benchmark',
        image: '/project/crossdatasetthreatbenchmark1.webp',
        description:
            'A reproducible security-ML laboratory that compares anomaly classifiers across multiple traffic datasets, exposing model drift, data leakage, class imbalance, calibration errors, and cross-environment performance loss.',
        longDescription:
            'The benchmark standardizes ingestion, preprocessing, semantic feature mapping, feature selection, class-imbalance handling, model training, probability calibration, and experiment tracking. Logistic Regression, Decision Tree, SVM, Random Forest, and gradient-boosted models are evaluated within their source dataset and against an independent traffic distribution. Model cards report performance by attack category together with inference latency, model size, calibration quality, and explainability evidence.',
        techStack: ['Python', 'Pandas', 'scikit-learn', 'XGBoost', 'SHAP'],
        tools: ['Jupyter', 'MLflow', 'UNSW-NB15', 'CSE-CIC-IDS2018'],
        status: 'planned',
        startDate: '2026-09-01',
        role: 'Experimental design and ML evaluation',
        customTimeline: 'Data pipeline • Benchmark design',
        team: 'Independent project',
        highlights: [
            'Consistent preprocessing and leakage-resistant train/test boundaries',
            'Same-dataset and cross-dataset evaluation reported separately',
            'Accuracy, precision, recall, F1, detection rate, and false-positive rate',
            'SHAP-based feature analysis for model transparency',
        ],
        category: 'Security Machine Learning',
        challengesAndSolutions: [
            {
                problem: 'Different datasets use incompatible schemas and traffic distributions.',
                solution: 'Create a shared semantic feature layer and report unsupported features explicitly rather than silently imputing meaning.',
            },
        ],
    },
    {
        id: 'research-project-4',
        slug: 'closed-loop-cyber-response-orchestrator',
        title: 'Closed-Loop Cyber Response Orchestrator',
        image: '/project/closedloopcyberresponseorchestrator1.webp',
        description:
            'A bounded cyber-response platform that correlates security events into incidents, scores operational risk, selects guarded response playbooks, validates recovery, and records lessons for future decisions.',
        longDescription:
            'The orchestrator implements a complete detect–assess–mitigate–recover–adapt lifecycle instead of stopping at alert generation. It correlates related telemetry into incident graphs, calculates risk using threat severity, service criticality, business impact, and infrastructure dependencies, then selects an approved response playbook. Autonomy levels determine whether an action runs automatically, requires human approval, or remains advisory. Preflight checks, dry runs, rollback actions, health validation, and immutable audit records keep automation within authorized boundaries.',
        techStack: ['Python', 'FastAPI', 'Apache Kafka', 'Sigma Rules', 'Ansible'],
        tools: ['Docker', 'MITRE ATT&CK', 'Prometheus', 'Grafana'],
        status: 'planned',
        startDate: '2026-09-01',
        role: 'Cyber-defense workflow and guardrail design',
        customTimeline: 'Orchestration • Architecture phase',
        team: 'Independent project',
        highlights: [
            'Closed-loop telemetry, detection, correlation, response, recovery, and adaptation',
            'Autonomy levels constrain actions according to risk and business impact',
            'Dry-run mode previews every infrastructure change before execution',
            'Evaluation tracks containment time, recovery time, action safety, and rollback success',
        ],
        category: 'Autonomous Cyber Defense',
        features: [
            {
                title: 'Safety Controls',
                items: [
                    '**Authorized bounds** define which actions can execute without approval.',
                    '**Preflight checks** validate dependencies and blast radius before mitigation.',
                    '**Compensating actions** provide a tested rollback path for each playbook.',
                ],
            },
        ],
        challengesAndSolutions: [
            {
                problem: 'An incorrect autonomous response can disrupt a healthy critical service.',
                solution: 'Combine policy bounds, service criticality, dry runs, approval gates, and mandatory rollback definitions.',
            },
        ],
    },
    {
        id: 'research-project-5',
        slug: 'dependency-aware-service-recovery',
        title: 'Dependency-Aware Service Recovery Planner',
        image: '/project/dependencyawareservicerecovery1.webp',
        description:
            'A graph-based resilience platform that maps service dependencies, calculates blast radius, produces safe restoration sequences, and validates each recovered component before dependent systems continue.',
        longDescription:
            'The planner represents applications, databases, identity services, storage, network paths, and supporting infrastructure as a directed dependency graph. When an incident occurs, it identifies the affected subgraph, calculates critical paths and blast radius, then produces a recovery sequence based on prerequisites, business priority, health state, and recovery objectives. Each stage must pass technical and application-level validation before dependent services proceed, while cycles, stale relationships, and unavailable prerequisites are surfaced for human resolution.',
        techStack: ['Python', 'NetworkX', 'Kubernetes', 'Ansible', 'Prometheus'],
        tools: ['Docker', 'Chaos Mesh', 'Grafana', 'Synthetic Service Lab'],
        status: 'planned',
        startDate: '2026-09-01',
        role: 'Recovery algorithm and simulation design',
        customTimeline: 'Recovery engine • Simulation phase',
        team: 'Independent project',
        highlights: [
            'Directed service graph with criticality and recovery metadata',
            'Topological recovery planning with cycle detection',
            'Health validation gates between each recovery stage',
            'Chaos scenarios evaluate restoration order and recovery success',
        ],
        category: 'Cyber Resilience',
        challengesAndSolutions: [
            {
                problem: 'Real enterprise dependency maps are incomplete and frequently become stale.',
                solution: 'Merge declared dependencies with observed service communication and flag low-confidence graph edges for review.',
            },
        ],
    },
    {
        id: 'research-project-6',
        slug: 'immutable-backup-control-plane',
        title: 'Immutable Backup Control Plane',
        image: '/project/immutablebackupcontrolplane1.webp',
        description:
            'A ransomware-resilient backup control plane that separates production from recovery administration while enforcing immutable retention, isolated identities, multi-tier copies, and approval-controlled restoration.',
        longDescription:
            'The platform treats backup infrastructure as an independent security boundary rather than ordinary secondary storage. Restricted transfer paths allow backup ingestion without granting production systems destructive repository access. Separate administrative identities, least-privilege roles, immutable object locks, multi-tier copies, retention policies, integrity manifests, and approval-controlled recovery workflows protect trusted restore points against ransomware, compromised credentials, and malicious deletion.',
        techStack: ['Python', 'S3 Object Lock', 'MinIO', 'PostgreSQL', 'OIDC'],
        tools: ['Docker', 'Terraform', 'HashiCorp Vault', 'Synthetic Backup Lab'],
        status: 'planned',
        startDate: '2026-09-01',
        role: 'Resilient-storage architecture and threat modeling',
        customTimeline: 'Control plane • Threat-model phase',
        team: 'Independent project',
        highlights: [
            'Production and recovery identities are separated by design',
            'Object-lock retention prevents premature alteration or deletion',
            'Multi-tier recovery copies reduce dependence on one repository',
            'Threat model covers ransomware, stolen admin credentials, and malicious deletion',
        ],
        category: 'Ransomware Resilience',
        challengesAndSolutions: [
            {
                problem: 'Immutability can preserve infected or unusable data just as effectively as clean data.',
                solution: 'Pair retention locks with integrity verification, malware scanning, recovery testing, and trusted-point selection.',
            },
        ],
    },
    {
        id: 'research-project-7',
        slug: 'recovery-integrity-validation-lab',
        title: 'Recovery Integrity & Restore Drill Lab',
        image: '/project/recoveryintegrityvalidationlab1.webp',
        description:
            'An automated recovery-assurance pipeline that verifies cryptographic integrity, restores selected backups into isolated environments, tests application health, and produces auditable readiness evidence.',
        longDescription:
            'A successful backup job does not prove that a service can be recovered. This platform samples recovery points, verifies signed manifests and cryptographic hashes, provisions an ephemeral isolated environment, restores the selected application and data, and runs schema, consistency, dependency, malware, and health checks. It records achieved RPO and RTO, quarantines failed recovery points, generates evidence reports, and securely destroys the temporary environment after validation.',
        techStack: ['Python', 'SHA-256', 'Terraform', 'Docker', 'PostgreSQL'],
        tools: ['MinIO', 'Prometheus', 'Grafana', 'GitHub Actions'],
        status: 'planned',
        startDate: '2026-09-01',
        role: 'Validation workflow and recovery-test design',
        customTimeline: 'Recovery assurance • Validation design',
        team: 'Independent project',
        highlights: [
            'Cryptographic integrity checks before recovery begins',
            'Ephemeral isolated environments for non-disruptive restore testing',
            'Application, database, and dependency health validation',
            'Evidence reports measure RPO, RTO, integrity, and test success',
        ],
        category: 'Backup Engineering',
        challengesAndSolutions: [
            {
                problem: 'Restore testing can expose sensitive data or affect production services.',
                solution: 'Use isolated ephemeral networks, masked test data, read-only source access, and automatic teardown.',
            },
        ],
    },
    {
        id: 'research-project-8',
        slug: 'context-aware-authorization-engine',
        title: 'Context-Aware RBAC + ABAC Engine',
        image: '/project/contextawareauthorizationengine1.webp',
        description:
            'A hybrid authorization engine that keeps roles manageable while evaluating device health, resource sensitivity, location, time, behavior, and requested operation before every access decision.',
        longDescription:
            'The engine uses RBAC as the stable organizational permission baseline and contextual ABAC-style rules to refine individual requests. After confirming role eligibility, it evaluates device posture, location, time, behavioral risk, resource classification, and requested action. Policies can permit, require stronger authentication, reduce privileges, mask data, or deny access. A simulator detects rule conflicts, shadowed policies, missing attributes, and unexpected outcomes before a policy reaches enforcement.',
        techStack: ['Open Policy Agent', 'Rego', 'FastAPI', 'PostgreSQL', 'OIDC'],
        tools: ['Docker', 'Keycloak', 'Postman', 'Synthetic Access Logs'],
        status: 'planned',
        startDate: '2026-09-01',
        role: 'Authorization model and policy architecture',
        customTimeline: 'Authorization engine • Policy design',
        team: 'Independent project',
        highlights: [
            'RBAC supplies organizational structure; context refines each decision',
            'Device posture, resource sensitivity, location, time, behavior, and operation',
            'Policy simulator explains allow, challenge, restrict, and deny outcomes',
            'Evaluation covers policy correctness, decision latency, and administrative complexity',
        ],
        category: 'Access Control',
        challengesAndSolutions: [
            {
                problem: 'Fine-grained contextual rules can become harder to administer than role explosion.',
                solution: 'Use reusable policy modules, typed attributes, conflict detection, versioning, and simulation before release.',
            },
        ],
    },
    {
        id: 'research-project-9',
        slug: 'just-in-time-privileged-access-broker',
        title: 'Just-in-Time Privileged Access Broker',
        image: '/project/justintimeprivilegedaccessbroker1.webp',
        description:
            'A just-in-time privileged-access broker that replaces standing administrator rights with risk-aware, approval-controlled credentials scoped to one resource, operation, and limited duration.',
        longDescription:
            'A standing role establishes eligibility but never grants permanent administrative access. Users request a specific resource, operation, justification, and duration; the broker evaluates identity assurance, device compliance, current risk, separation-of-duties rules, and approval requirements before issuing short-lived credentials. Sessions can be monitored and revoked, secrets are retrieved only when needed, and every request, approval, use, expiry, and emergency action is recorded for audit.',
        techStack: ['Python', 'FastAPI', 'OpenID Connect', 'Open Policy Agent', 'Redis'],
        tools: ['Keycloak', 'HashiCorp Vault', 'Docker', 'PostgreSQL'],
        status: 'planned',
        startDate: '2026-09-01',
        role: 'Privileged-access workflow and security design',
        customTimeline: 'Privilege broker • Workflow design',
        team: 'Independent project',
        highlights: [
            'Standing roles define eligibility without granting standing privilege',
            'Resource-, action-, and time-scoped access tokens',
            'Step-up authentication and approval based on request risk',
            'Automatic expiry, revocation, and immutable decision history',
        ],
        category: 'Privileged Access',
        challengesAndSolutions: [
            {
                problem: 'Emergency access must remain available without becoming a permanent bypass.',
                solution: 'Provide monitored break-glass access with short expiry, mandatory justification, immediate alerting, and after-action review.',
            },
        ],
    },
    {
        id: 'research-project-10',
        slug: 'role-mining-policy-simulator',
        title: 'Role Mining & Policy Simulator',
        image: '/project/roleminingpolicysimulator1.webp',
        description:
            'An identity-governance analytics platform that detects excessive permissions, duplicate roles, dormant grants, policy conflicts, and safer role or contextual-policy candidates before enforcement.',
        longDescription:
            'The platform analyzes anonymized entitlement records, access history, role assignments, resource ownership, sensitivity, and decision context to reveal privilege concentration and unused access. Graph analysis identifies redundant roles and risky permission paths, while policy simulation estimates how proposed consolidation, removal, or contextual controls would affect legitimate work. Recommendations remain advisory, include supporting evidence, and require owner and security approval before any access changes.',
        techStack: ['Python', 'Pandas', 'CatBoost', 'NetworkX', 'PostgreSQL'],
        tools: ['Jupyter', 'Plotly', 'Docker', 'Synthetic Access Dataset'],
        status: 'planned',
        startDate: '2026-09-01',
        role: 'Policy analytics and recommendation design',
        customTimeline: 'Policy analytics • Design phase',
        team: 'Independent project',
        highlights: [
            'Role-permission graph reveals privilege concentration and redundant roles',
            'Access history identifies dormant and rarely justified permissions',
            'Policy simulation estimates the impact of contextual controls',
            'Human review prevents automated recommendations from changing access directly',
        ],
        category: 'Identity Governance',
        challengesAndSolutions: [
            {
                problem: 'Historical access logs may encode bad policy and organizational bias.',
                solution: 'Treat log-derived recommendations as evidence, combine them with resource ownership and sensitivity, and require human approval.',
            },
        ],
    },
];
