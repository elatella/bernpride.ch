<script lang="ts">
	import arrow from '$lib/images/arrow-right-white.svg';
</script>

<section id="description" class="root">
	<div class="main-content">
		<p>
			Die BernPride und die EuroGames 2023 finden vom 26. Juli bis 29. Juli 2023 statt! Wir sind auf
			jegliche Hilfe angewisen. Wenn Du uns unterstützen möchtest, melde Dich unter <a
				href="mailto:volunteers@eurogames2023.ch">volunteers@eurogames2023.ch</a
			>.
		</p>
		<br />

		<p>
			Die BernPride soll auch in den kommenden Jahren wieder stattfinden. Nach der BernPride 2023
			wird es ein Treffen geben, an dem alle teilnehmen können, welche bei einer nächsten Ausgabe in
			Verein und OK mithelfen möchten. Wenn Du dabei sein möchtest, melde Dich unter <a
				href="mailto:info@bernpride.ch">info@bernpride.ch</a
			> und wir senden Dir bald nähere Informationen über das Treffen zu.
		</p>

		<div class="buttons">
			<a href="/we-want-you/volunteers" class="button">
				Volunteers <img src={arrow} alt="arrow right" width="30" height="18" class="arrow" />
			</a>
		</div>
	</div>
</section>

<style>
	.root {
		display: flex;
		justify-content: center;
		background-color: var(--turquoise);
		color: var(--red);
	}

	.main-content {
		flex-direction: column;
		margin-top: 50px;
		margin-bottom: 50px;
	}

	.buttons {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		margin-top: 70px;
	}

	a.button {
		margin: 15px 0;
		width: 100%;
		text-decoration: none;
		border-radius: 999px;
		border-color: var(--red);
		border-style: solid;
		padding: 10px 20px 14px;
		font-size: 80%;
		color: var(--white);
		background-color: var(--red);
	}

	.arrow {
		margin-left: 15px;
	}

	@media only screen and (min-width: 768px) {
		.buttons {
			flex-direction: row;
		}

		a.button {
			margin: 20px;
		}
	}
</style>
