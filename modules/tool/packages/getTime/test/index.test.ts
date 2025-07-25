import { expect, test } from 'vitest';
import tool from '..';
import { getMockSystemVar } from 'test/utils';

test(async () => {
  expect(tool.name).toBeDefined();
  expect(tool.description).toBeDefined();
  expect(tool.cb).toBeDefined();
});
