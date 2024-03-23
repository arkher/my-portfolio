import { AnimatedText, Article, Container } from "@/components";
import Head from "next/head";

const page = () => {
  return (
    <>
      <Head>
        <title>Paulo Gomes | Articles page</title>
        <meta name="description" content="Articles of Paulo Gomes."></meta>
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Container className="pt-16">
          <AnimatedText text="Words Can Change The World! " className="mb-16" />
          <h2 className="font-bold text-4xl w-full text-center mb-16 dark:text-light">
            All articles
          </h2>
          <ul>
            <Article
              title="Diagnosis of COVID-19 on chest X-ray images using residual neural networks"
              date="2022"
              link="https://rosario.ufma.br/jspui/handle/123456789/6382"
            />
            <Article
              title="Prediction of Unregistered Consumer Lawsuits: An Approach to the Problem of Unbalanced Classes"
              date="2019"
              link="https://sol.sbc.org.br/index.php/ercemapi/article/view/8858"
            />
            <Article
              title="Prediction of lawsuits in the electricity sector due to lack of energy supply using logistic regression"
              date="2019"
              link="https://proceedings.science/sbai-2019/trabalhos/predicao-de-acoes-judiciais-no-setor-eletrico-por-falta-de-fornecimento-de-energ"
            />
          </ul>
        </Container>
      </main>
    </>
  );
};

export default page;
