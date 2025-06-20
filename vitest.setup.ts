import '@testing-library/jest-dom';
import { vi } from 'vitest';

// useTranslation hook
vi.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));
