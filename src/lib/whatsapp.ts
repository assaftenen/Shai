export const WHATSAPP_NUMBER = "972527201720";

export function waLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const DEFAULT_WA_MESSAGE =
  "היי שי! ראיתי את העמוד של UPGRADE ואשמח לשמוע פרטים על אימון ניסיון חינם 💪";
