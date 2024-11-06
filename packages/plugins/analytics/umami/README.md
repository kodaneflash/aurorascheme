## PostHog Plugin

Install the plugin with the following command:

```bash
npx @makerkit/cli plugins install
```

Then choose the Plugin from the list of available plugins.

### Install Plugin in the Analytics package

To install the plugin in the Analytics package, run the following command:

```bash
pnpm add "@kit/umami@workspace:*" --filter analytics -D
```

You can now use the Umami plugin in the Analytics package. Update the `packages/analytics/src/index.ts` file as follows:

```tsx
import { createUmamiAnalyticsService } from '@kit/umami';

import { createAnalyticsManager } from './analytics-manager';
import type { AnalyticsManager } from './types';

export const analytics: AnalyticsManager = createAnalyticsManager({
    providers: {
        umami: createUmamiAnalyticsService,
    },
});
```

## Configuration

Please add the following environment variables to your `.env` file:

```bash
NEXT_PUBLIC_UMAMI_HOST=your-umami-host
NEXT_PUBLIC_UMAMI_WEBSITE_ID=your-umami-website-id
```