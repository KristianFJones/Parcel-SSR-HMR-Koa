// UI/ui/routes/Example/index.tsx
import React, { FunctionComponent } from 'react';
import { Typography } from '@rmwc/typography';
import { BoxStyle } from 'ui/lib/styles';

type ExampleRouteType = FunctionComponent;

const ExampleRoute: ExampleRouteType = () => {
  return (
    <div style={BoxStyle}>
      <Typography use='headline4'>Example Route Level 0</Typography>
    </div>
  );
};

export default ExampleRoute;
