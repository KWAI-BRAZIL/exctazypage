export const WA_NUMBER = "5562992384231";

export function waUrl(message: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const CTA_LABEL = "Falar com consultores";

export const WHATSAPP = {
  consultants: waUrl("Olá! Quero falar com um consultor da Neuro Business."),
};

export const CHECKOUT = {
  neuro: "https://pay.cakto.com.br/3eeunjy_1034360",
  fase01: "https://pay.cakto.com.br/fuavbthx_1022333",
  bundle: "https://pay.cakto.com.br/8xkedy_1034429",
};

export const INSTAGRAM =
  "https://www.instagram.com/eusounarah_rubia?igsh=ODJ2czZnazk1aGlk&utm_source=qr";
