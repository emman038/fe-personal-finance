import AppLayout from 'src/components/appLayout';
import ProjectionVsActual from 'src/components/projectionVsActual';
import { IncomeContent } from 'src/content';

const Income = () => {
  //TODO - Will come from BE API
  const hasMultipleIncomeSources = true;
  const getsWeeklyPay = true;

  const { heading, graphContent } = IncomeContent;

  //TODO - implement multiple sources of Income graph (multiple categories), Implement weekly pay graphs
  return (
    <AppLayout heading={heading}>
      <ProjectionVsActual graphContent={graphContent} />
      {hasMultipleIncomeSources && (
        <ProjectionVsActual graphContent={graphContent} />
      )}
      {getsWeeklyPay && <ProjectionVsActual graphContent={graphContent} />}
    </AppLayout>
  );
};

export default Income;
