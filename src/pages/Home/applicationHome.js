import { Component } from "react";
import SimpleAccordion from "../../components/Accordion/accordion";
import PercentagePaper from "../../components/PercentagePaper/percentagePaper";
import SelectDropdown from "../../components/SelectDropdown/searchExamPapers";

export default class ApplicationHome extends Component {
  some = () => {
    return <PercentagePaper user="Karthick Boopathy" percentage={70} />;
  };

  render() {
    return (
      <>
        <PercentagePaper user="Karthick Boopathy" percentage={70} />
        <SelectDropdown />
        <SimpleAccordion children={this.some()} title="Branch" />
      </>
    );
  }
}
