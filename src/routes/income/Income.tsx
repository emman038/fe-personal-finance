import AppLayout from 'src/components/appLayout';
import ProjectionVsActual from 'src/components/projectionVsActual/ProjectionVsActual';

const Income = () => {
  const hasMultipleIncomeSources = true;

  return (
    <AppLayout heading={'Income'}>
      <ProjectionVsActual />
      {hasMultipleIncomeSources && <ProjectionVsActual />}
      <div>Test Test</div>
    </AppLayout>
  );
};

export default Income;
