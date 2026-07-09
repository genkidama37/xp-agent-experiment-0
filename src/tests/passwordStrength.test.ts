import { evaluatePasswordStrength } from '../core/passwordStrength';

describe('The Password Strength Evaluator', () => {
  it('considers strong a password with lowercase, uppercase, digits, and special characters', () => {
    const password = 'Abcd123!';

    const strength = evaluatePasswordStrength(password);

    expect(strength).toBe('strong');
  });

  it('considers weak an empty password', () => {
    const password = '';

    const strength = evaluatePasswordStrength(password);

    expect(strength).toBe('weak');
  });

  it('considers weak a password shorter than 8 characters', () => {
    const password = 'Ab1!';

    const strength = evaluatePasswordStrength(password);

    expect(strength).toBe('weak');
  });

  it('considers medium a password with 3 character types (no lowercase)', () => {
    const password = 'ABCD1234!';

    const strength = evaluatePasswordStrength(password);

    expect(strength).toBe('medium');
  });

  it('considers medium a password with 3 character types (no uppercase)', () => {
    const password = 'abcd1234!';

    const strength = evaluatePasswordStrength(password);

    expect(strength).toBe('medium');
  });

  it('considers medium a password with 3 character types (no digits)', () => {
    const password = 'Abcdefgh!';

    const strength = evaluatePasswordStrength(password);

    expect(strength).toBe('medium');
  });

  it('considers medium a password with 3 character types (no special)', () => {
    const password = 'Abcd1234';

    const strength = evaluatePasswordStrength(password);

    expect(strength).toBe('medium');
  });

  it('considers medium a password with 2 character types', () => {
    const password = 'Abcdefgh';

    const strength = evaluatePasswordStrength(password);

    expect(strength).toBe('medium');
  });

  it('considers weak a password with only 1 character type', () => {
    const password = 'abcdefgh';

    const strength = evaluatePasswordStrength(password);

    expect(strength).toBe('weak');
  });
});
