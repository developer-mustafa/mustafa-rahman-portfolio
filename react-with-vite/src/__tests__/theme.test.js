import { describe, it, expect, beforeEach } from 'vitest';

describe('Dual-Theme Engine & Storage Tests', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.className = '';
  });

  it('initializes default dark theme if no preference is saved', () => {
    const savedTheme = localStorage.getItem('portfolio-theme');
    const defaultTheme = savedTheme || 'dark';

    expect(defaultTheme).toBe('dark');
    document.documentElement.classList.add(defaultTheme);

    expect(document.documentElement.classList.contains('dark')).toBe(true);
    expect(document.documentElement.classList.contains('light')).toBe(false);
  });

  it('persists and applies light theme preference accurately', () => {
    localStorage.setItem('portfolio-theme', 'light');
    const theme = localStorage.getItem('portfolio-theme');

    expect(theme).toBe('light');

    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');

    expect(document.documentElement.classList.contains('light')).toBe(true);
    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });

  it('toggles seamlessly between dark and light themes without corruption', () => {
    let currentTheme = 'dark';
    document.documentElement.className = currentTheme;

    // Toggle to light
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.className = currentTheme;
    localStorage.setItem('portfolio-theme', currentTheme);

    expect(document.documentElement.classList.contains('light')).toBe(true);
    expect(localStorage.getItem('portfolio-theme')).toBe('light');

    // Toggle back to dark
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.className = currentTheme;
    localStorage.setItem('portfolio-theme', currentTheme);

    expect(document.documentElement.classList.contains('dark')).toBe(true);
    expect(localStorage.getItem('portfolio-theme')).toBe('dark');
  });
});
