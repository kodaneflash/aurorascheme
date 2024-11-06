## Umami Plugin

Install the plugin with the following command:

```bash
npx @makerkit/cli plugins install
```

Then choose the Plugin from the list of available plugins.

### Install Plugin in the Analytics package

To install the plugin in the Analytics package, run the following command:

```bash
pnpm add "@kit/posthog@workspace:*" --filter analytics -D
```

You can now use the Posthog plugin in the Analytics package. Update the `packages/analytics/src/index.ts` file as follows:

```tsx
import { createPostHogAnalyticsService } from '@kit/posthog';

import { createAnalyticsManager } from './analytics-manager';
import type { AnalyticsManager } from './types';

export const analytics: AnalyticsManager = createAnalyticsManager({
  providers: {
    posthog: createPostHogAnalyticsService,
  },
});
```

### Configuration

Please add the following environment variables to your `.env` file:

```bash
NEXT_PUBLIC_POSTHOG_PROJECT_KEY=your-project-key
```

By default, we use the US Posthog instance. If you want to use a different instance, please add the following environment variable:

```bash
NEXT_PUBLIC_POSTHOG_URL=
```