import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: "gergbadbda",
      label: "This is Label one",
      content: "Label one - Some kind of content has to go in this space",
    },
    {
      id: "htrehagbfdsv",
      label: "This is Label two",
      content: "Label two - Some kind of content has to go in this space",
    },
    {
      id: "ewFSDFEFW",
      label: "This is Label three",
      content: "Label three - Some kind of content has to go in this space",
    },
  ];
  return <Accordion items={items} />;
}

export default AccordionPage;
