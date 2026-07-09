export type PasswordStrength = 'weak' | 'medium' | 'strong';

export function evaluatePasswordStrength(password: string): PasswordStrength {
  if (isTooShort(password)) return 'weak';

  const characterTypesCount = countCharacterTypes(password);

  if (characterTypesCount === 4) return 'strong';
  if (characterTypesCount >= 2) return 'medium';

  return 'weak';
}

function countCharacterTypes(password: string): number {
  const characterTypeChecks = [hasLowercase, hasUppercase, hasDigit, hasSpecialCharacter];
  return characterTypeChecks.filter((check) => check(password)).length;
}

function isTooShort(password: string): boolean {
  const minimumLength = 8;
  return password.length < minimumLength;
}

function hasLowercase(password: string): boolean {
  return /[a-z]/.test(password);
}

function hasUppercase(password: string): boolean {
  return /[A-Z]/.test(password);
}

function hasDigit(password: string): boolean {
  return /[0-9]/.test(password);
}

function hasSpecialCharacter(password: string): boolean {
  return /[!@#$%^&*(),.?":{}|<>]/.test(password);
}
