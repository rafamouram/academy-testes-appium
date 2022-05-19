describe("Primeiro teste", () => {
    it("Verifica se o título do app é MyMoviesApp", async () => {
        const textoTitulo = await $("android.widget.TextView").getText();
        expect(textoTitulo).toBe("MyMoviesApp");
    });
});