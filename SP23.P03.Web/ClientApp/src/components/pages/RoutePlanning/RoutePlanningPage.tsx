import React from 'react';
import { Button } from '@mantine/core';

interface RoutePlanningPageProps {}
/**
 * <description here>
 *
 * @param props <description here>
 */
export function RoutePlanningPage(props: RoutePlanningPageProps): React.ReactElement {
  return (
    <div>
      {/* This is a placeholder that launches the Stripe payment */}
      <form action="/api/payment/create-checkout-session" method="POST">
          <Button type="submit">Checkout</Button>
        </form>
    </div>
  );
}
