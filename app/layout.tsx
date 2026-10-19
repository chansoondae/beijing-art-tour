import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: '하이디라님과 함께 하는 베이징 아트 투어', description: '10월 29일부터 11월 1일까지, 예술과 오래된 도시 사이. 하이디라님과 함께하는 베이징 3박 4일.' };
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) { return <html lang="ko"><body>{children}</body></html>; }
