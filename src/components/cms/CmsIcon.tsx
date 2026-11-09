import {
  Award, BarChart3, Bike, BookOpenCheck, Bot, Boxes, Briefcase, Building2,
  Calculator, Clipboard, Cloud, Code, Cpu, FileText, FlaskConical, Gamepad2,
  Globe, GraduationCap, Handshake, Headset, Heart, Home, Layers, Mail,
  MapPin, MessageCircle, MessageSquare, MonitorSmartphone, Network, Package, Palette,
  PenTool, Phone, PieChart, Rocket, School, SearchCheck, Server, Settings2,
  Share2, ShieldCheck, ShoppingBag, ShoppingBasket, ShoppingCart, Smartphone,
  Sparkles, Store, Target, TrendingUp, UserCog, UserPlus, Users, UtensilsCrossed,
  Video, Eye, BrainCircuit,
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

  // Industry dropdown icons & aliases
  calculator: Calculator, accounting: Calculator,
  package: Package, "shopping-bag": ShoppingBag,
  store: Store, marketplace: Store,
  monitor: MonitorSmartphone, "monitor-smartphone": MonitorSmartphone,
  flask: FlaskConical, testing: FlaskConical,
  "graduation-cap": GraduationCap, lms: GraduationCap,
  school: School,
  "book-check": BookOpenCheck, sis: BookOpenCheck,
  handshake: Handshake, crm: Handshake,
  network: Network, erp: Network,
  "user-plus": UserPlus, hrm: UserPlus,
  "user-cog": UserCog, hrms: UserCog,
  boxes: Boxes, inventory: Boxes,
  "shopping-basket": ShoppingBasket, grocery: ShoppingBasket,
  utensils: UtensilsCrossed, restaurant: UtensilsCrossed,
  bike: Bike, delivery: Bike,
  home: Home, realestate: Home,
  "message-square": MessageSquare, chat: MessageSquare,
} as const;

export function CmsIcon({name, size = 18}: {name?: string; size?: number}) {
  const Icon = name ? icons[name as keyof typeof icons] : undefined;
  return Icon ? <Icon size={size} aria-hidden="true" /> : null;
}

