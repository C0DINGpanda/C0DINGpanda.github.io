import Button from './Button'
import { Link } from 'react-router-dom'
const BlogCard = () => {
  const cardInfo = [
    {
      link: 'https://dev.to/c0dingpanda/0-downtime-is-a-myth-with-deployment-slots-3o7j',
      title: '0 downtime is a myth with deployment slots',
      text: 'Azure App Service deployment slots allow zero downtime deployments, but the feasibility depends on your project. For Single Page Applications (SPAs), it’s possible. However, complex projects with interdependencies among multiple services may face challenges. Managing slots introduces overhead, and direct deployment can be faster and cost-effective. '
    },
    {
      link: 'https://dev.to/c0dingpanda/trick-to-get-free-ssl-certificate-for-azure-application-gateway-5b8p',
      title: 'Trick to get Free SSL certificate for azure application gateway',
      text: 'SSL certificates typically expire after one year due to security concerns. While the App Service Managed Certificate is free, it has limitations (no wildcards, no export). For an architecture with an application gateway, consider LetsEncrypt—a free, automated CA provider. It integrates well with Azure Application Gateway, allowing automated certificate renewal and better control over expiry. The younger the certificate, the more secure it is against attacks. The App Service Managed Certificate now supports apex domains and sub-domains in General Availability'
    },
    {
      link: 'https://www.ascertra.com/blog/proarc-edms-is-designed-for-reliability#:~:text=Proarc%20is%20designed%20to%20ensure,workload%20demands%20of%20our%20customers.',
      title: 'Proarc EDMS - Designed for Reliability',
      text: 'Proarc Online is a business-critical engineering document management SaaS solution (EDMS) provided by Ascertra. Major industrial construction projects rely on Proarc day-to-day to organize, plan, execute, collaborate, track, and deliver documentation. The foundation for Proarc Online is aligned with the five core pillars of cloud computing architecture: security, reliability, performance, cost optimization, and operational excellence. This article focuses on the key principles, practices, and services used to ensure Proarc reliability.'
    },
    {
      link: 'https://dev.to/c0dingpanda/balancing-cost-and-resilience-4ido',
      title: 'Proarc EDMS - Designed for Reliability',
      text: 'achieving resilience in cloud architecture while balancing costs. It emphasizes the importance of design complexity, cost to implement, operational effort, effort to secure, and environmental impact. The article also suggests focusing on operational excellence and identifying critical resources for cost-efficient resilience.'
    },
    {
      link: 'https://dev.to/c0dingpanda',
      title: 'loading More....',
      text: 'loading More....'
    }
  ]
  const RenderCard = (card, index) => {
    return (
      <div className="card" key={index}>
        <h2 className="headingtext">{card.title}</h2>
        <p>{card.text}</p>
        <Link to={card.link}>
          <Button>Read more</Button>
        </Link>
      </div>
    )
  }
  return (
    <div className="container">
      <section className="seccard">{cardInfo.map(RenderCard)}</section>
    </div>
  )
}

export default BlogCard
