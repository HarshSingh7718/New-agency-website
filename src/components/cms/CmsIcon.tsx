import {
  Award, BarChart3, Bot, Briefcase, Building2, Clipboard, Cloud, Code, Cpu, FileText,
  Gamepad2, Globe, Headset, Heart, Layers, Mail, MapPin, MessageCircle, Palette,
  PenTool, Phone, SearchCheck, Server, Settings2, Share2, ShieldCheck, ShoppingCart,
  Smartphone, TrendingUp, Users, Video, Rocket, Eye, Target, BrainCircuit, Sparkles, PieChart,
} from "lucide-react";

const icons = {
  award: Award, chart: BarChart3, bot: Bot, briefcase: Briefcase, building: Building2,
  clipboard: Clipboard, cloud: Cloud, code: Code, cpu: Cpu, file: FileText,
  gamepad: Gamepad2, globe: Globe, headset: Headset, heart: Heart, layers: Layers,
  mail: Mail, "map-pin": MapPin, message: MessageCircle, palette: Palette, pen: PenTool,
  phone: Phone, search: SearchCheck, server: Server, settings: Settings2, share: Share2,
  shield: ShieldCheck, cart: ShoppingCart, smartphone: Smartphone, trending: TrendingUp,
  users: Users, video: Video,
  rocket: Rocket, eye: Eye, target: Target, brain: BrainCircuit, sparkles: Sparkles, pie: PieChart,
} as const;

export function CmsIcon({name, size = 18}: {name?: string; size?: number}) {
  const Icon = name ? icons[name as keyof typeof icons] : undefined;
  return Icon ? <Icon size={size} aria-hidden="true" /> : null;
}
