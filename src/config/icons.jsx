import { Database, Globe, Cpu, Shield, CheckCircle, Layout, Users } from 'lucide-react';

const IconMap = {
    Database,
    Globe,
    Cpu,
    Shield,
    CheckCircle,
    Layout,
    Users,
};

export function getIcon(iconName) {
    return IconMap[iconName];
}
