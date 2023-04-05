import { Meta } from '@/components/layout/Meta';
import { Section } from '@/components/layout/Section';
import Shell from '@/template/Shell';
import { AppConfig } from '@/constants/app';

const Index = () => (
  <>
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Shell title="Dashboard">
      <Section>
        <h2>hola</h2>
      </Section>

      <Section>
        <h2>hola</h2>
      </Section>
    </Shell>
  </>
);

export default Index;
