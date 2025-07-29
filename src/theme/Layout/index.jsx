// src/theme/Layout/index.tsx
import React from 'react';
import Layout from '@theme-original/Layout';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/react"

export default function LayoutWrapper(props) {
  return (
    <>
      <Layout {...props} />
      <Analytics />
      <SpeedInsights/>
    </>
  );
}
