'use client';
import { Column } from '@umami/react-zen';
import { Panel } from '@/components/common/Panel';
import { useMessages } from '@/components/hooks';
import { EventsChart } from '@/components/metrics/EventsChart';
import { MetricsTable } from '@/components/metrics/MetricsTable';

export function ShareEventsSection({ websiteId }: { websiteId: string }) {
  const { t, labels } = useMessages();

  return (
    <Panel minWidth="0" width="100%" style={{ overflow: 'hidden' }}>
      <Column gap="6">
        <Column border="bottom" paddingBottom="6">
          <EventsChart websiteId={websiteId} limit={50} />
        </Column>
        <MetricsTable
          websiteId={websiteId}
          type="event"
          title={t(labels.event)}
          metric={t(labels.count)}
          limit={50}
        />
      </Column>
    </Panel>
  );
}
