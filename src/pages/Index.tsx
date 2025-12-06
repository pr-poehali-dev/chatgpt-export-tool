import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center">
                <Icon name="Sparkles" className="text-white" size={24} />
              </div>
              <span className="text-xl font-bold gradient-text">ChatGPT Export Pro</span>
            </div>
            
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('features')} className="text-sm hover:text-primary transition-colors">
                Возможности
              </button>
              <button onClick={() => scrollToSection('pricing')} className="text-sm hover:text-primary transition-colors">
                Тарифы
              </button>
              <button onClick={() => scrollToSection('faq')} className="text-sm hover:text-primary transition-colors">
                FAQ
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-sm hover:text-primary transition-colors">
                Контакты
              </button>
              <Button variant="outline" size="sm" onClick={() => navigate('/auth')}>Войти</Button>
              <Button size="sm" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90" onClick={() => navigate('/auth')}>
                Начать
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-secondary/20 text-secondary border-secondary/30 animate-fade-in">
            <Icon name="Zap" size={14} className="mr-1" />
            Новая эра экспорта данных
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            Экспортируйте свои <br />
            <span className="gradient-text">ChatGPT диалоги</span>
            <br />
            одним кликом
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
            Seamless интеграция с Chrome. Автоматический экспорт истории. 
            Синхронизация с облаком. Всё под вашим контролем.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8" onClick={() => navigate('/auth')}>
              <Icon name="Download" size={20} className="mr-2" />
              Установить расширение
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              <Icon name="Play" size={20} className="mr-2" />
              Смотреть демо
            </Button>
          </div>

          <div className="mt-16 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 blur-3xl animate-glow-pulse" />
            <div className="relative glow-border rounded-2xl p-8 backdrop-blur-sm">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                  <div className="text-4xl font-bold gradient-text mb-2">50K+</div>
                  <div className="text-sm text-muted-foreground">Активных пользователей</div>
                </div>
                <div>
                  <div className="text-4xl font-bold gradient-text mb-2">1M+</div>
                  <div className="text-sm text-muted-foreground">Экспортов</div>
                </div>
                <div>
                  <div className="text-4xl font-bold gradient-text mb-2">99.9%</div>
                  <div className="text-sm text-muted-foreground">Uptime</div>
                </div>
                <div>
                  <div className="text-4xl font-bold gradient-text mb-2">4.9★</div>
                  <div className="text-sm text-muted-foreground">Рейтинг Chrome</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
              <Icon name="Rocket" size={14} className="mr-1" />
              Возможности
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Всё что нужно для работы с <span className="gradient-text">данными</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Профессиональные инструменты для экспорта и управления вашими ChatGPT диалогами
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: 'Chrome',
                title: 'Seamless интеграция',
                description: 'Полная интеграция с Chrome без замедления браузера'
              },
              {
                icon: 'History',
                title: 'Автоматический экспорт',
                description: 'Автоматическое сохранение всей истории диалогов в реальном времени'
              },
              {
                icon: 'Cloud',
                title: 'Облачная синхронизация',
                description: 'Доступ к вашим данным с любого устройства через защищенное облако'
              },
              {
                icon: 'FileText',
                title: 'Множество форматов',
                description: 'Экспорт в PDF, Markdown, JSON, CSV и другие форматы'
              },
              {
                icon: 'Search',
                title: 'Умный поиск',
                description: 'Мгновенный поиск по всем вашим диалогам с фильтрами'
              },
              {
                icon: 'Shield',
                title: 'Безопасность данных',
                description: 'Шифрование данных и полный контроль над приватностью'
              }
            ].map((feature, index) => (
              <Card key={index} className="glow-border hover:scale-105 transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4">
                    <Icon name={feature.icon as any} className="text-primary" size={24} />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">
              <Icon name="DollarSign" size={14} className="mr-1" />
              Тарифы
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Выберите свой <span className="gradient-text">план</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Гибкие тарифы для любых задач — от личного использования до корпоративных решений
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: 'Free',
                price: '0₽',
                period: 'навсегда',
                features: [
                  '50 экспортов в месяц',
                  'Базовые форматы (PDF, TXT)',
                  'Локальное хранилище',
                  'Email поддержка'
                ],
                cta: 'Начать бесплатно',
                variant: 'outline' as const
              },
              {
                name: 'Pro',
                price: '499₽',
                period: 'в месяц',
                popular: true,
                features: [
                  'Неограниченные экспорты',
                  'Все форматы экспорта',
                  'Облачная синхронизация 10GB',
                  'Умный поиск',
                  'Приоритетная поддержка',
                  'API доступ'
                ],
                cta: 'Попробовать Pro',
                variant: 'default' as const
              },
              {
                name: 'Enterprise',
                price: 'Custom',
                period: 'индивидуально',
                features: [
                  'Всё из Pro',
                  'Неограниченное облако',
                  'Командная работа',
                  'SSO интеграция',
                  'Персональный менеджер',
                  'SLA 99.9%'
                ],
                cta: 'Связаться с нами',
                variant: 'outline' as const
              }
            ].map((plan, index) => (
              <Card 
                key={index} 
                className={`relative ${plan.popular ? 'glow-border scale-105 shadow-2xl' : ''} hover:scale-105 transition-all duration-300`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary">
                    Популярный
                  </Badge>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold gradient-text">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={18} />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-gradient-to-r from-primary to-secondary' : ''}`}
                    variant={plan.variant}
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-secondary/20 text-secondary border-secondary/30">
              <Icon name="HelpCircle" size={14} className="mr-1" />
              FAQ
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Частые <span className="gradient-text">вопросы</span>
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                q: 'Как работает экспорт данных?',
                a: 'Расширение автоматически отслеживает ваши диалоги с ChatGPT и сохраняет их в выбранном формате. Вы можете настроить автоматический экспорт или делать это вручную по запросу.'
              },
              {
                q: 'Безопасны ли мои данные?',
                a: 'Абсолютно! Все данные шифруются end-to-end. Мы используем протоколы безопасности банковского уровня. Ваши данные никогда не передаются третьим лицам.'
              },
              {
                q: 'Можно ли использовать на нескольких устройствах?',
                a: 'Да, с подпиской Pro и выше ваши данные синхронизируются между всеми устройствами через защищенное облако.'
              },
              {
                q: 'Какие форматы экспорта поддерживаются?',
                a: 'Мы поддерживаем PDF, Markdown, JSON, CSV, HTML и TXT. В плане Pro доступны все форматы с расширенными настройками.'
              },
              {
                q: 'Есть ли ограничения на количество экспортов?',
                a: 'В бесплатном плане - 50 экспортов в месяц. В Pro - неограниченно. Enterprise включает дополнительные возможности для команд.'
              },
              {
                q: 'Как отменить подписку?',
                a: 'Вы можете отменить подписку в любой момент из личного кабинета. Доступ к Pro функциям сохранится до конца оплаченного периода.'
              }
            ].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="glow-border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-medium hover:text-primary">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
              <Icon name="Mail" size={14} className="mr-1" />
              Контакты
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Остались <span className="gradient-text">вопросы?</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Напишите нам, и мы ответим в течение 24 часов
            </p>
          </div>

          <Card className="glow-border">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input 
                    type="email" 
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-background/50"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Сообщение</label>
                  <Textarea 
                    placeholder="Расскажите, чем мы можем помочь..."
                    rows={5}
                    className="bg-background/50"
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-primary to-secondary" size="lg">
                  <Icon name="Send" size={18} className="mr-2" />
                  Отправить
                </Button>
              </form>

              <div className="mt-8 pt-8 border-t border-border/50">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <Icon name="Mail" className="mx-auto mb-2 text-primary" size={24} />
                    <div className="text-sm text-muted-foreground">support@chatgptexport.pro</div>
                  </div>
                  <div>
                    <Icon name="MessageCircle" className="mx-auto mb-2 text-secondary" size={24} />
                    <div className="text-sm text-muted-foreground">Telegram поддержка</div>
                  </div>
                  <div>
                    <Icon name="Github" className="mx-auto mb-2 text-accent" size={24} />
                    <div className="text-sm text-muted-foreground">GitHub Issues</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border/50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center">
                  <Icon name="Sparkles" className="text-white" size={18} />
                </div>
                <span className="font-bold gradient-text">ChatGPT Export Pro</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Профессиональный инструмент для экспорта и управления ChatGPT диалогами
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Продукт</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#features" className="hover:text-primary transition-colors">Возможности</a></li>
                <li><a href="#pricing" className="hover:text-primary transition-colors">Тарифы</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Документация</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">API</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Блог</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Вакансии</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Правовая информация</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Условия использования</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Лицензия</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 ChatGPT Export Pro. Все права защищены.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-lg glass-effect flex items-center justify-center hover:scale-110 transition-transform">
                <Icon name="Twitter" size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg glass-effect flex items-center justify-center hover:scale-110 transition-transform">
                <Icon name="Github" size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg glass-effect flex items-center justify-center hover:scale-110 transition-transform">
                <Icon name="Linkedin" size={18} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;