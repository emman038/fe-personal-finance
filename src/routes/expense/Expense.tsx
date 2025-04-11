import AppLayout from 'src/components/appLayout';
import ProjectionVsActual from 'src/components/projectionVsActual';
import ExpenseContent from 'src/content/expenseContent';

const Expense = () => {
  const { heading, graphContent } = ExpenseContent;

  return (
    <AppLayout heading={heading}>
      <ProjectionVsActual graphContent={graphContent} />
    </AppLayout>
  );
};

export { Expense };
