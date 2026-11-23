import { describe, it, expect } from 'vitest';
import { personalProfile } from '../data/profile';
import { projectsData } from '../data/projects';
import { experienceData } from '../data/experience';
import { skillsCategories, skillTiers } from '../data/skills';
import { educationData } from '../data/education';

describe('Data Integrity & Architecture Tests', () => {
  describe('Personal Profile Data', () => {
    it('contains valid and complete profile fields', () => {
      expect(personalProfile.name).toBe('Mustafa Rahman');
      expect(personalProfile.title).toContain('Full-Stack AI Software Engineer');
      expect(Array.isArray(personalProfile.roles)).toBe(true);
      expect(personalProfile.roles.length).toBeGreaterThanOrEqual(4);
      expect(personalProfile.roles).toContain('Full-Stack Software Engineer');
      expect(personalProfile.roles).toContain('Software Architect');
    });

    it('contains verified contact and social information', () => {
      expect(personalProfile.social.email).toBe('mustafa.rahman.official@gmail.com');
      expect(personalProfile.social.github).toMatch(/github\.com\/developer-mustafa/);
      expect(personalProfile.social.phone).toBe('+880 1840-643946');
      expect(personalProfile.social.whatsapp).toContain('8801840643946');
      expect(personalProfile.location.country).toBe('Bangladesh');
    });

    it('has well-defined mission statements', () => {
      expect(personalProfile.mission.title).toBeDefined();
      expect(personalProfile.mission.statement).toBeDefined();
      expect(personalProfile.mission.coreBelief).toBeDefined();
    });
  });

  describe('Projects Data', () => {
    it('has at least 4 showcase projects', () => {
      expect(projectsData.length).toBeGreaterThanOrEqual(4);
    });

    it('every project satisfies required schema attributes', () => {
      projectsData.forEach((project) => {
        expect(project.id).toBeDefined();
        expect(typeof project.id).toBe('string');
        expect(project.name).toBeDefined();
        expect(project.tagline).toBeDefined();
        expect(project.category).toBeDefined();
        expect(Array.isArray(project.technologies)).toBe(true);
        expect(project.technologies.length).toBeGreaterThan(0);
        expect(Array.isArray(project.features)).toBe(true);
        expect(project.features.length).toBeGreaterThan(0);
      });
    });

    it('contains Automata Pro and Mentora Pro with proper categories', () => {
      const automata = projectsData.find((p) => p.id === 'automata-pro');
      expect(automata).toBeDefined();
      expect(automata?.category).toContain('Educational');
      expect(automata?.website).toBe('https://automatapro.web.app/');

      const mentora = projectsData.find((p) => p.id === 'mentora-pro');
      expect(mentora).toBeDefined();
      expect(mentora?.name).toBe('Mentora Pro');
    });
  });

  describe('Experience Data', () => {
    it('contains professional software engineering history', () => {
      expect(Array.isArray(experienceData)).toBe(true);
      expect(experienceData.length).toBeGreaterThan(0);

      experienceData.forEach((exp) => {
        expect(exp.role).toBeDefined();
        expect(exp.company).toBeDefined();
        expect(Array.isArray(exp.highlights)).toBe(true);
        expect(exp.highlights.length).toBeGreaterThan(0);
      });
    });
  });

  describe('Skills Data OpenSpec Compliance', () => {
    it('verifies skills have NO arbitrary percentage ratings and follow 3 tiers', () => {
      expect(Array.isArray(skillsCategories)).toBe(true);
      expect(skillTiers.core).toBeDefined();
      expect(skillTiers.knowledge).toBeDefined();
      expect(skillTiers.exploring).toBeDefined();

      skillsCategories.forEach((category) => {
        expect(category.title).toBeDefined();
        expect(Array.isArray(category.skills)).toBe(true);
        category.skills.forEach((skill) => {
          // OpenSpec explicitly prohibits fictitious percentage ratings
          expect(skill.percentage).toBeUndefined();
          expect(skill.name).toBeDefined();
          expect(['core', 'knowledge', 'exploring']).toContain(skill.tier);
        });
      });
    });
  });

  describe('Education Data', () => {
    it('contains valid academic background and teaching institutions', () => {
      expect(educationData.professionalInterest).toBeDefined();
      expect(Array.isArray(educationData.institutions)).toBe(true);
      expect(educationData.institutions.length).toBeGreaterThan(0);
      educationData.institutions.forEach((inst) => {
        expect(inst.name).toBeDefined();
        expect(inst.role).toBeDefined();
      });
    });
  });
});
