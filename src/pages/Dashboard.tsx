import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Dashboard = () => {
  const [user] = useState({
    name: 'Иван Иванов',
    email: 'ivan@example.com',
    plan: 'Pro',
    exportsUsed: 847,
    exportsLimit: Infinity,
    cloudStorage: 3.2,
    cloudLimit: 10,
    memberSince: 'Январь 2024'
  });

  const recentExports = [
    { id: 1, name: 'Проект разработки API', date: '2024-06-05', format: 'PDF', size: '2.4 MB' },
    { id: 2, name: 'Маркетинговые идеи', date: '2024-06-04', format: 'Markdown', size: '156 KB' },
    { id: 3, name: 'Техническая документация', date: '2024-06-03', format: 'JSON', size: '512 KB' },
    { id: 4, name: 'Обучающие материалы', date: '2024-06-02', format: 'PDF', size: '1.8 MB' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border/50 glass-effect">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center">
                <Icon name="Sparkles" className="text-white" size={24} />
              </div>
              <span className="text-xl font-bold gradient-text">ChatGPT Export Pro</span>
            </Link>
            
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                <Icon name="Settings" size={16} className="mr-2" />
                Настройки
              </Button>
              <Button variant="ghost" size="sm">
                <Icon name="LogOut" size={16} className="mr-2" />
                Выйти
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">
            Личный <span className="gradient-text">кабинет</span>
          </h1>
          <p className="text-muted-foreground">Управляйте вашим аккаунтом и подпиской</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="glow-border">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Экспорты</CardTitle>
              <Icon name="Download" className="text-primary" size={18} />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold gradient-text">
                {user.exportsUsed.toLocaleString()}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {user.exportsLimit === Infinity ? 'Безлимит' : `Из ${user.exportsLimit}`}
              </p>
            </CardContent>
          </Card>

          <Card className="glow-border">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Облачное хранилище</CardTitle>
              <Icon name="Cloud" className="text-secondary" size={18} />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold gradient-text">
                {user.cloudStorage} GB
              </div>
              <p className="text-xs text-muted-foreground mt-1">Из {user.cloudLimit} GB</p>
              <div className="w-full bg-muted rounded-full h-2 mt-2">
                <div 
                  className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all" 
                  style={{ width: `${(user.cloudStorage / user.cloudLimit) * 100}%` }}
                />
              </div>
            </CardContent>
          </Card>

          <Card className="glow-border">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Текущий план</CardTitle>
              <Icon name="Award" className="text-accent" size={18} />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold gradient-text">{user.plan}</div>
              <p className="text-xs text-muted-foreground mt-1">Член с {user.memberSince}</p>
              <Button size="sm" variant="outline" className="mt-2 w-full">
                Улучшить план
              </Button>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="exports" className="space-y-6">
          <TabsList className="glass-effect">
            <TabsTrigger value="exports">
              <Icon name="FileText" size={16} className="mr-2" />
              Экспорты
            </TabsTrigger>
            <TabsTrigger value="profile">
              <Icon name="User" size={16} className="mr-2" />
              Профиль
            </TabsTrigger>
            <TabsTrigger value="billing">
              <Icon name="CreditCard" size={16} className="mr-2" />
              Подписка
            </TabsTrigger>
          </TabsList>

          <TabsContent value="exports" className="space-y-4">
            <Card className="glow-border">
              <CardHeader>
                <CardTitle>Недавние экспорты</CardTitle>
                <CardDescription>История ваших последних экспортов</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentExports.map((exp) => (
                    <div key={exp.id} className="flex items-center justify-between p-4 rounded-lg glass-effect hover:scale-105 transition-all">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                          <Icon name="FileText" className="text-primary" size={20} />
                        </div>
                        <div>
                          <div className="font-medium">{exp.name}</div>
                          <div className="text-sm text-muted-foreground">
                            {exp.date} • {exp.size}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge variant="outline">{exp.format}</Badge>
                        <Button variant="ghost" size="sm">
                          <Icon name="Download" size={16} />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Icon name="Share2" size={16} />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  Показать все экспорты
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="profile" className="space-y-4">
            <Card className="glow-border">
              <CardHeader>
                <CardTitle>Информация профиля</CardTitle>
                <CardDescription>Управление вашими личными данными</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center text-3xl font-bold">
                    {user.name.charAt(0)}
                  </div>
                  <div>
                    <Button variant="outline" size="sm">
                      <Icon name="Upload" size={16} className="mr-2" />
                      Изменить фото
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="name">Полное имя</Label>
                  <Input id="name" defaultValue={user.name} className="bg-background/50" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue={user.email} className="bg-background/50" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Новый пароль</Label>
                  <Input id="password" type="password" placeholder="••••••••" className="bg-background/50" />
                </div>

                <div className="pt-4">
                  <Button className="bg-gradient-to-r from-primary to-secondary">
                    <Icon name="Save" size={16} className="mr-2" />
                    Сохранить изменения
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="billing" className="space-y-4">
            <Card className="glow-border">
              <CardHeader>
                <CardTitle>Управление подпиской</CardTitle>
                <CardDescription>Текущий план и платежная информация</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="p-6 rounded-lg glass-effect">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold gradient-text">{user.plan}</h3>
                      <p className="text-muted-foreground">499₽ / месяц</p>
                    </div>
                    <Badge className="bg-gradient-to-r from-primary to-secondary">Активна</Badge>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Icon name="Check" className="text-primary" size={16} />
                      <span>Неограниченные экспорты</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Check" className="text-primary" size={16} />
                      <span>10 GB облачного хранилища</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Check" className="text-primary" size={16} />
                      <span>Приоритетная поддержка</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Следующий платёж</span>
                    <span className="text-muted-foreground">5 июля 2024</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Способ оплаты</span>
                    <div className="flex items-center gap-2">
                      <Icon name="CreditCard" size={16} />
                      <span className="text-muted-foreground">•••• 4242</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button variant="outline" className="flex-1">
                    <Icon name="CreditCard" size={16} className="mr-2" />
                    Изменить карту
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Icon name="X" size={16} className="mr-2" />
                    Отменить подписку
                  </Button>
                </div>

                <div className="pt-4 border-t border-border/50">
                  <h4 className="font-medium mb-4">Другие планы</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg border border-border hover:border-primary/50 transition-colors cursor-pointer">
                      <h5 className="font-bold mb-1">Free</h5>
                      <p className="text-sm text-muted-foreground mb-2">0₽ навсегда</p>
                      <Button variant="ghost" size="sm" className="w-full">Перейти на Free</Button>
                    </div>
                    <div className="p-4 rounded-lg border border-border hover:border-accent/50 transition-colors cursor-pointer">
                      <h5 className="font-bold mb-1">Enterprise</h5>
                      <p className="text-sm text-muted-foreground mb-2">Индивидуально</p>
                      <Button variant="ghost" size="sm" className="w-full">Связаться</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
