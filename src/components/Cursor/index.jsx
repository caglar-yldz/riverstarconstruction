import React from "react";

const Cursor = () => {
  React.useEffect(() => {
    // Sayfanın imleç stilini varsayılan yap (özelleştirilmişse sıfırla)
    document.body.style.cursor = "default";

    // Herhangi bir görünmezlik sorunu varsa tüm cursor'ların visibility'sini garantiye al
    const forceVisible = () => {
      const elements = document.querySelectorAll(".cursor-inner, .cursor-outer");
      elements.forEach((el) => {
        el.style.visibility = "visible";
      });
    };

    forceVisible();

    return () => {
      // Temizleme işlemi (gerekirse)
      document.body.style.cursor = "";
    };
  }, []);

  return null; // Görsel bir özel imleç kullanılmıyor
};

export default Cursor;
