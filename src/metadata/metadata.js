module.exports = {
  name: 'Ian Dong',
  title: 'Software Engineer',
  facts: {
    'Residence': `<a href="https://goo.gl/maps/kToTNMXQgnmXDa5e8">
                  <i class="fa fa-home" style="font-size: 1.2em;"></i>Wellington | Open to Relocate
                </a>`,
    'Email': `<a href="mailto:ian.tung1013@gmail.com">
                <i class="fa fa-envelope" style="font-size: 0.9em;"></i> ian.tung1013@gmail.com
              </a>`,
    'LinkedIn': `<a href="https://www.linkedin.com/in/iandong1013/">
                  <i class="fa fa-linkedin"></i> iandong1013
                </a>`,
    'GitHub': `<a href="https://github.com/IanD1013">
                  <i class="fa fa-github" style="font-size: 1.1em;"></i> IanD1013
                </a>`,
    'Portfolio': `<a href="https://portfolio-iandong.netlify.app/">
                  <i class="fa fa-user" style="font-size: 1.1em;"></i> website
                </a>`
  },
  skills: [
    {
      name: 'Technical Skills',
      examples: [
        'Microsoft stack: C#, .NET, Web API, MVC, EntityFramework, .NET MAUI.',
        'Modern web stack: JavaScript, TypeScript, NodeJS, React, Redux, NextJS, HTML5, CSS3, MongoDB, Vitest.',
        'UI/UX: Figma, Shadcn UI, Tailwind CSS, SCSS, Material UI, Bootstrap.',
        'Infrastructure: Azure, AWS, MySQL, SQL Server, PostgreSQL, Docker, Kubernetes.',
        'AI: Practical experience integrating LLMs and AI tooling into development workflows; prompt engineering',
        'Other: Java, Spring Boot, Python, Django, React Native, C, C++, Linux, Matlab, ArcGIS, Blender.',
        'Experienced in web development & integration using industry standard technologies and frameworks.',
        'Experienced with all stages of the Software Development Life cycle and agile methodologies.',
        'Experienced and knowledge of best practices for software design and architecture.'
      ]
    },
    {
      name: 'Interpersonal and Communication Skills',
      examples: [
        'Client facing skills gained as consultant and IT support.',
        'Excellent verbal and written communication skills.',
        'Confident in delivering business or team presentations.',
        'Experienced in writing detailed specifications and various forms of documentation.',
        'Fluent in English and Mandarin.'
      ]
    },
    {
      name: 'Learning Skills',
      examples: [
        'Adapting very quickly to various working environments.',
        'Build up relevant domain knowledge in a short time frame.',
        'Confident in learning and picking up new technology stacks, AI tools, and frameworks.',
        'Work on side projects in free time.'
      ]
    }
  ],
  experience: [
        {
      company: 'MAS Zengrange',
      location: 'Lower Hutt, Wellington',
      roles: [
        {
          title: 'Software Test Engineer (Full-time)',
          start: 'Jun 2026',
          end: 'Current',
          blurb: 'Developing an automated end-to-end testing capability for specialised embedded touchscreen systems, replacing a previously manual-only testing process.',
          items: [
            'Architected and delivered a Python-based black-box testing framework that remotely operates physical Linux touchscreen devices, captures their displays, and validates workflows from an end-user perspective—establishing the organisation’s first repeatable automated regression-testing capability.',
            'Applied agentic coding with Claude Code & Codex throughout design, implementation, testing, troubleshooting, and documentation, accelerating delivery of a production-ready solution while maintaining human review and automated quality checks.',
            'Created a test pipeline that converts manual Word test cases into structured specifications and executable automation bindings, reducing repetitive implementation effort and improving traceability between requirements, actions, and results.',
            'Engineered parallel multi-device execution, automatic recovery procedures, and role-aware test scenarios, allowing complex workflows involving multiple physical devices to be tested consistently.',
            'Integrated automated reporting with Pytest, JUnit, HTML reports, and Squash TM, giving testers and stakeholders clear evidence of results while reducing reliance on repetitive manual execution.'
          ]
        }
      ],
      badges: ['Python', 'Pytest', 'C', 'C++', 'SSH', 'Linux/X11', 'OCR', 'YAML', 'CI/CD', 'Squash TM', 'YouTrack', 'Claude Code', 'Codex'],
    },
    {
      company: 'Spiritx',
      location: 'Auckland',
      roles: [
        {
          title: 'Software Engineer (Full-time)',
          start: 'Jun 2025',
          end: 'May 2026',
          blurb: 'Embedded within a cross-product engineering team spanning Kiwi Square (web), Insurspy (web), and Fresh Direct (React Native), shipping features from architecture through rollout—owning Kiwi Square’s casual-job pillar, delivering Insurspy’s Compare Power flow, and guiding Fresh Direct through its app-store launch.',
          items: [
            'Owned <a href="https://kiwisquare.co.nz/" target="_blank" rel="noreferrer noopener">Kiwi Square</a>’s casual-job pillar end-to-end, pairing a localized Next.js/TypeScript + Redux experience with .NET 8/EF Core APIs and ingestion pipelines so seekers can search, filter, and save thousands of live NZ listings.',
            'Designed and maintained 20+ Python/MySQL crawlers that harvest roles from major NZ employers, deduplicate overlapping records, and auto-expire stale posts to keep the catalogue current.',
            'Delivered <a href="https://insurspy.co.nz/" target="_blank" rel="noreferrer noopener">Insurspy</a>’s NZ power-comparison journey by wiring address search, intake flows, and results screens into the established Next.js/MUI design system and API surface.',
            'Led the <a href="https://play.google.com/store/apps/details?id=nz.co.freshdirect" target="_blank" rel="noreferrer noopener">Fresh Direct</a> release track, hardening the React Native app, managing signing credentials, and steering submissions through App Store Connect and Google Play Console.'
          ]
        }
      ],
      badges: ['C#', '.NET', 'Rest API', 'MySQL', 'Entity Framework Core', 'Dependency Injection', 'Clean Architecture', 'JWT', 'NextJS', 'Redux', 'Typescript', 'Python', 'Web Crawler', 'React Native', 'Jira'], 
    },
    {
      company: 'Allsite.ai',
      location: 'Auckland',
      roles: [
        {
          title: 'Full Stack Developer (Part-time)',
          start: 'Mar 2024',
          end: 'May 2025',
          blurb: 'Contributed to full-stack development of a geospatial visualization platform, focusing on React frontend features and .NET backend optimizations while implementing modern development practices.',
          items: [
            'Enhanced and maintained a React-based frontend application, implementing secure user authentication flows using Microsoft Authentication Library (MSAL) and managing session states.',
            'Optimized 2D/3D geospatial visualization features using ArcGIS Maps SDK, including camera controls, layer management, and interactive map elements.',
            'Developed and refined video sequence functionality for 3D map presentations, implementing smooth camera transitions and layer toggling for improved user experience.',
            'Contributed to the integration of third-party services (Giraffe platform) by implementing data synchronization and exchange mechanisms between frontend and backend systems.',
            'Improved backend architecture by implementing SOLID principles, including service registration refactoring and modular extension methods, resulting in more maintainable and testable code.',
            'Enhanced system performance through implementation of advanced C# features including IAsyncEnumerable for streaming responses, compiled queries, and efficient batch processing patterns.'
          ]
        }
      ],
      badges: ['C#', '.NET', 'ASP.NET Web API', 'SQL Server', 'Entity Framework Core', 'IoC Container', 'React', 'Typescript', 'ArcGIS Maps SDK for JavaScript', 'Docker', 'Azure DevOps CI/CD' ], 
    },
    {
      company: 'Civix',
      location: 'Auckland',
      roles: [
        {
          title: 'IT Support Technician (Part-time)',
          start: 'Mar 2024',
          end: 'May 2025',
          blurb: 'Member of a high performing team that delivers technical support to Civix engineers, surveyors, planners, and administrative staff, resolving hardware and software issues.',
          items: [
            'Automated routine IT tasks using Pulseway and custom scripts (PowerShell, batch) to improve efficiency and reduce manual intervention.',
            'Promoted the use of an online issue tracker and maintained a comprehensive IT knowledge base by creating and updating documentation, streamlining support and improving response times.',
            'Facilitated staff onboarding and offboarding, including laptop/workstation setup and access provisioning.',
            'Installed, configured, and maintained computer hardware, software, networks, servers, and peripherals.',
            'Resolved hardware, software, and network connectivity issues via phone, video call, ticketing system, Pulseway remote control, and in-person support.',
            'Collaborated with cross-functional teams to ensure smooth IT operations across departments.',
            'Demonstrated strong multitasking and communication skills while managing concurrent support requests.'           
          ]
        }
      ],
      badges: ['Powershell', 'Bash', 'Pulseway', 'Microsoft 365 System Administrator', 'Entra ID', 'Windows', 'Linux', 'Microsoft Teams'], 
    },
    {
      company: 'Allsite.ai',
      location: 'Auckland',
      roles: [
        {
          title: 'Software Engineering Intern (Full-time)',
          start: 'Nov 2023',
          end: 'Feb 2024',
          blurb: 'Developed and implemented advanced geospatial analysis solutions using machine learning, computer vision, and GIS technologies to optimize urban planning and infrastructure design processes.',
          items: [
            'Modified a UNet++ model to detect impervious surfaces in New Zealand with 95% accuracy.',
            'Created a predictive function to interpolate and forecast rainfall data across multiple years.',
            'Engineered a Python script utilizing Unity, Blender, and Esri SDKs to automate the creation of dynamic promotional videos showcasing ArcGIS 3D scenes.',
            'Contributed to internal knowledge sharing by presenting domain concepts and system architecture in a team-wide learning session, promoting cross-team understanding and collaboration.',
            'Delivered a final internship presentation to the Allsite.ai team and Civix engineers, showcasing project outcomes and impact; recognized by company leadership in a public post celebrating intern contributions.'
          ]
        }
      ],
      badges: ['Python', 'ArcPy', 'Machine Learning', 'CNN', 'GNN', 'PyTorch', 'Unity', 'Blender', 'ArcGIS', 'ArcGIS Maps SDK for Unity', 'Data Pipeline'], 
    },
  ],
  additionalInformation: 'I currently hold a <b>three-year post-study work visa</b> valid until June 25, 2028. I am available to start after a two-week notice period.'
};
