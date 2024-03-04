export type WeatherCodes = {
  [code: number]: { text: string; icon: string };
};
// type WeatherCodes = Record<number, { text: string; icon: string }>;

// TODO : define narrow type for weather code number

export const WEATHER_CODES: WeatherCodes = {
  0: { text: "Ciel dégagé", icon: "☀️" },
  1: { text: "Principalement dégagé", icon: "☁️" },
  2: { text: "Partiellement nuageux", icon: "⛅" },
  3: { text: "Couvert", icon: "☁️" },
  45: { text: "Brouillard", icon: "🌫️" },
  48: { text: "Brouillard givrant", icon: "🌫️" },
  51: { text: "Bruine légère", icon: "🌧️" },
  52: { text: "Bruine modérée", icon: "🌧️" },
  53: { text: "Bruine d'intensité dense", icon: "🌧️" },
  56: { text: "Bruine verglaçante légère", icon: "❄️" },
  57: { text: "Bruine verglaçante d'intensité dense", icon: "❄️" },
  61: { text: "Pluie légère", icon: "🌧️" },
  63: { text: "Pluie modérée", icon: "🌧️" },
  65: { text: "Pluie d'intensité forte", icon: "🌧️" },
  66: { text: "Pluie verglaçante légère", icon: "❄️" },
  67: { text: "Pluie verglaçante d'intensité forte", icon: "❄️" },
  71: { text: "Chute de neige légère", icon: "❄️" },
  73: { text: "Chute de neige modérée", icon: "❄️" },
  75: { text: "Chute de neige d'intensité forte", icon: "❄️" },
  77: { text: "Grains de neige", icon: "❄️" },
  80: { text: "Averses de pluie légères", icon: "🌧️" },
  81: { text: "Averses de pluie modérées", icon: "🌧️" },
  82: { text: "Averses de pluie violentes", icon: "🌧️" },
  85: { text: "Légères averses de neige", icon: "❄️" },
  86: { text: "Averses de neige fortes", icon: "❄️" },
  95: { text: "Orage léger ou modéré", icon: "⚡" },
  96: { text: "Orage avec grêle légère", icon: "⚡❄️" },
  99: { text: "Orage avec grêle forte", icon: "⚡❄️" },
};
