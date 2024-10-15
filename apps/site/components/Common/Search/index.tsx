'use client';

import { OramaSearchBox, OramaSearchButton } from '@orama/react-components';
import { useTheme } from 'next-themes';
import type { FC } from 'react';

import {
  ORAMA_CLOUD_ENDPOINT,
  ORAMA_CLOUD_API_KEY,
  DEFAULT_ORAMA_QUERY_PARAMS,
  DEFAULT_ORAMA_SUGGESTIONS,
  BASE_URL,
} from '@/next.constants.mjs';

import { themeConfig } from './utils';

const SearchButton: FC = () => {
  const { resolvedTheme } = useTheme();
  const colorScheme = resolvedTheme as 'light' | 'dark';

  return (
    <>
      <OramaSearchButton
        style={{ flexGrow: 1 }}
        colorScheme={colorScheme}
        themeConfig={themeConfig}
      >
        Search
      </OramaSearchButton>

      <OramaSearchBox
        index={{ api_key: ORAMA_CLOUD_API_KEY, endpoint: ORAMA_CLOUD_ENDPOINT }}
        colorScheme={colorScheme}
        themeConfig={themeConfig}
        sourceBaseUrl={BASE_URL}
        sourcesMap={{
          title: 'pageSectionTitle',
          description: 'formattedPath',
          path: 'pageLink',
        }}
        resultMap={{
          title: 'pageSectionTitle',
          description: 'formattedPath',
          section: 'siteSection',
          path: 'pageLink',
        }}
        facetProperty="siteSection"
        linksTarget="_self"
        highlight={{
          caseSensitive: false,
          HTMLTag: 'b',
          CSSClass: 'font-bold',
        }}
        searchParams={DEFAULT_ORAMA_QUERY_PARAMS}
        suggestions={DEFAULT_ORAMA_SUGGESTIONS}
      />
    </>
  );
};

export default SearchButton;
