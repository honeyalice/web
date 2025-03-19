import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export const Experience = () => {
  return (
    <div>
      <section 
        id="experience" 
        className="flex items-center justify-center min-h-screen py-24 mt-16"
      >
        <Container>

          <Row className="mb-5">
            <Col xs={12} md={10} xl={8} className="mx-auto">
              <h3>Software Developer | Orca Intelligence | Washington.DC</h3>
              <h5 className="italic">April 2023 – Present</h5>
              <p><strong>Project: Real Estate Property Management Dashboard 
              </strong></p>
              <p>
              Developed a scalable property management dashboard to modernize real estate operations by streamlining lease tracking, maintenance requests, and financial reporting. The platform enables real-time monitoring, automation, and efficient data management for property managers handling 10000+ units across multiple locations.

              </p>
              <ul className="list-disc pl-6">
                <li>Architected and developed scalable GraphQL APIs using Node.js, Express.js, and Apollo Server, optimizing query resolution and data fetching to prevent overfetching/underfetching.
                </li>
                <li>Designed a federated GraphQL system, reducing API response times from 800ms to 450ms, improving data consistency across microservices.
                </li>
                <li>Integrated GraphQL with Next.js API routes, implementing server-side rendering (SSR) and Apollo Client caching to enhance performance and reduce API load.
                </li>
                <li>Implemented WebSockets for real-time updates, ensuring instant notifications for maintenance requests, lease status changes, and rent payment alerts.
                </li>
                <li>Optimized API performance by implementing batching and caching strategies (DataLoader, Redis), reducing redundant database queries and improving response times.
                </li>
                <li>Developed secure authentication and authorization using JWT and OAuth, ensuring role-based access control (RBAC) for tenants, property managers, and admins.
                </li>
                <li>Designed and optimized MongoDB and MySQL schemas, implementing indexing and query optimizations to handle large datasets efficiently.
                </li>
                <li>Automated CI/CD pipelines with GitHub Actions and AWS Amplify, ensuring smooth deployments and reducing release cycle time.
                </li>
              </ul>
            </Col>
          </Row>

          <Row className="mb-5">
          <Col xs={12} md={10} xl={8} className="mx-auto">
                        <h3>Software Developer | Scribd | Remote</h3>
              <h5 className="italic">October 2020 – March 2023</h5>
              <p><strong>Project: Adtech Optimization</strong></p>
              <p>
                This project involved the development and optimization of advanced advertising technology (AdTech) solutions to improve ad delivery performance and revenue generation for a high-traffic digital platform. The core focus was on optimizing both ad rendering and real-time ad auction systems to enhance overall user experience and ad monetization effectiveness.
              </p>
              <ul className="list-disc pl-6">
                <li>Developed and optimized real-time ad bidding systems by integrating Prebid.js, OpenRTB, and server-to-server bidding, increasing eCPM from $1.50 to $1.80 and improving ad fill rate from 75% to 86%.
                </li>
                <li>Built scalable backend services using Node.js and GraphQL, improving ad request handling efficiency through caching and query optimizations.
                </li>
                <li>Integrated and optimized advertising APIs & SDKs, reducing API latency and enhancing real-time ad targeting accuracy.</li>
                <li>Designed and implemented a dynamic ad auction strategy, optimizing bid requests and responses for better yield management, leading to a significant revenue increase.
                </li>
                <li>Improved ad rendering performance, reducing Time to Interactive (TTI) and First Contentful Paint (FCP) from 2.3s to 1.8s by implementing lazy loading, prefetching, and CDN optimizations.
                </li>
                <li>Enhanced security and compliance by implementing GDPR, CCPA, and user consent management policies, ensuring full compliance across all ad integrations.
                </li>
                <li>Developed logging and monitoring tools to track ad performance and detect anomalies, reducing ad-related errors and improving debugging efficiency.
                </li>
              </ul>
            </Col>
          </Row>

          <Row className="mb-5">
          <Col xs={12} md={10} xl={8} className="mx-auto">
                        <h3>Software Developer | Grubhub | New York City, NY</h3>
              <h5 className="italic">August 2017 – September 2020</h5>
              <ul className="list-disc pl-6">
                <li>Designed, implemented, and tested reusable libraries and UI components for web applications using React, Redux, and TypeScript.</li>
                <li>Contributed to building and maintaining micro-frontend architectures and CI/CD pipelines using Jenkins for automated testing, building, and deployment.</li>
                <li>Enhanced ad delivery systems by improving concurrent software that integrates with backend services, boosting performance and stability.</li>
                <li>Developed a new user-friendly interface for the company’s web app, leading to a 20% increase in user registrations.</li>
                <li>Improved system performance by troubleshooting, debugging, and optimizing React applications, resulting in a 15% reduction in latency and better user experience.</li>
                <li>Worked with RESTful APIs, GraphQL, and WebSockets for real-time communication, enhancing data flow and reducing response times.</li>
                <li>Ensured robust state management with Redux and Redux Thunk to handle asynchronous actions, improving the reliability of data flow across the application.</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};
