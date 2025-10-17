import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена",
      description: "Мы свяжемся с вами в ближайшее время",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const services = [
    {
      icon: "TrendingUp",
      title: "Стратегический маркетинг",
      description: "Разработка комплексных маркетинговых стратегий для достижения бизнес-целей"
    },
    {
      icon: "Target",
      title: "Продвижение бренда",
      description: "Создание и укрепление позиций бренда на рынке через интегрированные коммуникации"
    },
    {
      icon: "BarChart3",
      title: "Аналитика и исследования",
      description: "Глубокий анализ рынка, конкурентов и потребительского поведения"
    },
    {
      icon: "Users",
      title: "Digital-маркетинг",
      description: "Эффективное продвижение в цифровых каналах: SEO, контекст, социальные сети"
    },
    {
      icon: "MessageSquare",
      title: "Контент-стратегия",
      description: "Создание релевантного контента для привлечения и удержания аудитории"
    },
    {
      icon: "Award",
      title: "PR и коммуникации",
      description: "Управление репутацией и выстраивание эффективных коммуникаций со СМИ"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="relative bg-primary text-primary-foreground py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Маркетинг,<br />который работает
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-2xl font-light">
              Разрабатываем стратегии продвижения, которые увеличивают продажи и укрепляют позиции вашего бренда
            </p>
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium text-lg px-8 py-6"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Получить консультацию
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Комплексные решения для развития вашего бизнеса
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="p-8 hover:shadow-xl transition-all duration-300 animate-fade-in border-2 hover:border-accent"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6 w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Icon name={service.icon} className="text-accent" size={28} />
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Свяжитесь с нами</h2>
            <p className="text-xl text-muted-foreground">
              Обсудим ваш проект и найдём оптимальное решение
            </p>
          </div>

          <Card className="p-8 md:p-10 animate-fade-in shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">Имя</label>
                <Input
                  type="text"
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="h-12"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">Email</label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="h-12"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">Телефон</label>
                <Input
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="h-12"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">Сообщение</label>
                <Textarea
                  placeholder="Расскажите о вашем проекте"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="min-h-32 resize-none"
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-medium text-lg h-14"
              >
                Отправить заявку
              </Button>
            </form>
          </Card>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-8 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-primary-foreground/80">© 2024 Маркетинговое агентство. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
