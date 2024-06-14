import { useNavigate } from "react-router-dom";
import { MovieCard } from "../../../entities/movie-card";
import { Grid } from "@mui/material";

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 1, sm: 8, md: 12 }}
      alignItems="stretch"
    >
      {Array.from(Array(25)).map((_, index) => (
        <>
          <Grid item xs={1} sm={2.5} md={3} key={index} display="flex">
            <MovieCard
              name="Шрек"
              year={2011}
              rating={8.8}
              poster="https://kinopoisk-ru.clstorage.net/a1u5g2232/38d43cdWjn/4Us9no9ecyNzM-PiiMxK2sVbm_wFjiBCP4TCWOrniGrR096yflXSANCKro22aWsX7xZmKD3Gc7_-zBHTS21_q6MZccnQFDgrJW31rI_HTYrcRMKrFMNoFHuZ0QWxuKda-eH3wFhq-iD86-jD9XE0S7hWISYw0Cin7YFjuFo9JvPPUhuGiWAFB1IFuPSb-3nY0wWt8Qv2Kn0K4NtU79ytZPLm59hlXsAz-uP47NI3C0W-XQMGC_AqweqkUI4WESnD9HgDl6l8DiFdFb3ogcV8-ukMhdQyzgpBPvzbffbGkWbgz_TuVn3cBsXd5s31FiZLnXYQJzTbG93FnmSiMD4g1NhiD7eXRRcWbwe06pjhT_HvPoDfKdIoSyTd4lrL4K9Jysni2V5O1S_k0PbQ6iY-VY5QNSE7zRX4-JxdpS47FsfTbRiwpXooKFkyqOuT1mLT9iCy3TfxL0Uh3dld3dGrVP7B98tET9of-un4xeQNGlimfzMxHMwx4fO8bokcOBDq-mwkpoViGQpcB4LOotJX-uUnlNoIwx1qHfvPcPDOtG3Pw8zVU37yEcDW7vXSKi5hgnM8AQzEK_vnoG6SFjgL6OV4HpO1WhsJZi2u94bARe_JFKLvJ-UgXjju4n7u56Fx1-L99nN12S3xye7Q6wwQRr5fKS062QrNxZd_th0JEe_UaD-uik4_K0YKlNmc4GXo3A2U0QnmJGAFwfh49-Spc_XW1vBZUtkX2sLq09I7EkyTWjMaAe4l2cmfaKYUECPfwmYCl5tfESNjKJjogO5cyM8hoeEg1zZXL-DYQfL7qEjr6fPoRU3JIMPx1eTQByZnrH80BRzXNuLXlm-QOzI21e1aComwTycfQCuG94_aT87IFLTsI-I2Xijvy2XD4bB_8MP42EdN2QvR5s3GxzgOc7FROhgJ7zTY059NnxgSDcP9QRiVmE8rB3ECjMiK5Ev1_Dat0QbDJm0S3eRT7v6Add7G9M1wcP8X8eb92sQnNVunVgACPfABwuyEb4oyOzfc70EnkZxqPgxmOKfemdtd8fQDmuwI6xV_A83YXsL5rF_t-dnLX2zDAOXz6-3YNydDnVgGKzrCEd7RvXKdCBsT1-5QGJO0WSwtTi2CzYDNa-fpEaH9AO4XZBj_7Uvu2rpM9tLD9EB2xSn7w-zA7DE0aLlQFQcswS3iz6NxljIND9PwehO6qUEZK0c5i_ii1UTmySCw3jz3NXIF2tpi8PmSQsvm4OZaUcsA-tX8ze0lNHaweDU6MPMx2PW4Va88OC_u-mENlqx6OClVD5zQvNtm69AlhfwZyQtIPOPscuDlv0_r1P7dfl7EHcD29uXhKjhThEACBxbtAv75kleVFTs09cBdJ4iTSwo4XRmHya3YaffoMb78N_MPSTzF41rj54pO3OL313Z55DT79dPAxBsOZaNYMx8Yzjfs2Y5Kqx0tJMPwXR2WnEAcDHInvuyu60fo-ACfygHpDEoO7_pV9f66VtnS__N0YsAI9PDI4cQWN1WwejgkEPkE_dOWV5YpLhT3_Vkvq4t3DQlFIqTyk_ds-80EmNEC0C1VBd_sU_3Rq3Phw_PyWFH6MezP5uzLNypUoEE0Ly_vGd7mkVKDLxsT5Pt5K425SyQGeQSZ75zzVNH0FLfzIPsBdR_z0ELFxbp3-tnT-lVswhP38Nj-4RA2VIVPEyUL5RDZzoBksg4gC-DHYw6TknkOHnICm9yN60TY-xSSwRLVEkId6uNr49-zQfzVz8h7U-Asx_P11uc6GHewaD4PL-wL4c-MfoUKLgXD7lAGtLddKRdCFaHMisFU9dMDktYi1BZQHsHhZejZrEbU4_jvTkvCLd3M-ePWOxhXs1okOTjwBPHRvl2KLCAG78FNBZ6ZaTcpTjGD_JD4QOvrFqHzO9M-SgjE5EDr5o9Q8ef-0GVL8AzPwtngyj43aLxBNDEf5Dfz0bdzsTEJBMvhaDGpul8rAH84p_2Q0Hny1jCt_iTJEXAjy81g9MC3YM3D0s99bfUp78bNxu44Omewdj0YDcE1zP6Yc6MINynI7kYNvrVrMixdDKvLkdRg_fIsscw8wyBjHe3Re_fHi1Hbw_fZXGnfI9rw2cf6GTdmvU0aIw7oAvDKrFOMKRQv8cdLEaqrZDU-TSGc8aDpZvHJPpP0Au0CThzC5FjX5JxQzcP8-0RS4zXD1e3C0Q4pbrNKPioSyg_F-Z1UgBw2JcrFTgeail4vAlEWt_ix-FTvxBOFwwDpMGMC2eRp9-qiR9zp0NtiQf8C3OnG0c0rD1i-QzoaLMgu-e2zW78vNwjk5XkfkrFlOD1CDYj0g-595_E2hdYAwiteG9zIe9L6tkjS5trMWlnJCuHG9szQNShVrns0ATztKNnes0mJAgwI1OdDH6qxThU0cDqc0bzSfv7JG6P1BNkxbwXv0Hf0-JxI_MTE0XB-9z3ywerA9B4TUINvNyMXyyfw7LtVgAM8AsT8aS6wiHwYA0cmrMGk92vv3haH1xLrDm844uJf1-acY_TExc9lbfgs98TV--kRFkmlcBcQHeo6xMyMWaUbCj3v4VIKrJ97OSV_F6HaoNZg5tojl84CzQ9PPfjeXO7YkU7V09nuXk31AvjA_tvkMh5KmXQkBgvmC-bFm06yIhskycRYKpqsYiomTQaf4ovaaNz4Mo3UJtAdYTzH_kfh0JlLyPHX5XZs9Tfv0cvH4yc-a4F8BiIO0TT47IRtgRQ8LvPDeT-ejV0JBE82p92e-kLF2B-9zzjgMFMZ3c501dC_Tv3q7Ndkfcco5cTL_uoLJkeQVyMiHvEvxM2jeqYoLyjL9GkZs7tKKSZuGInXqMNC-vIhrMk6yhJtBvr5U-ntnlbi1sL5Z1TaJMbg9MzpBTBPlH8YBB_iB9zGok-DODMj1f1BDa2UXBY3VhSh0K_pYOfOIYPRMugqRhnzzGHA7YpU1szsy19q5TXY6PXH2gYoW7V4ODAv6zHEz7w"
              genres={[{ name: "комедия" }, { name: "семейный" }, { name: "мультфильм" }]}
              handleClick={() => navigate(`/${index}`)}
            />
          </Grid>
          <Grid item xs={1} sm={2.5} md={3} key={index + 100} display="flex">
            <MovieCard
              name="Гарри Поттер и философский камень "
              year={2001}
              rating={8.3}
              poster="https://kinopoisk-ru.clstorage.net/a1u5g2232/38d43cdWjn/4Us9no9ecyNzM-PiiMxK2sVbm_wFjiBCP4TCWOrniGrR096yflXSANCKroy7Z2cb7xZjfjzHduquzRGGSm5yq6MTLZvQFWt8I234_d-QF9yIEcyvFJFoFHuZ0QWxuKda-eH3wFhq-iD86-jD9XE0S7hWISYw0Cin7YFjuFo9JvPPUhuGiWAFB1IFuPSb-3nY0wWt8Qv2Kn0K4NtU79ytZPLm59hlXsAz-uP47NI3C0W-XQMGC_AqweqkUI4WESnD9HgDl6l8DiFdFb3ogcV8-ukMhdQyzgpBPvzbffbGkWbgz_TuVn3cBsXd5s31FiZLnXYQJzTbG93FnmSiMD4g1NhiD7eXRRcWbwe06pjhT_HvPoDfKdIoSyTd4lrL4K9Jysni2V5O1S_k0PbQ6iY-VY5QNSE7zRX4-JxdpS47FsfTbRiwpXooKFkyqOuT1mLT9iCy3TfxL0Uh3dld3dGrVP7B98tET9of-un4xeQNGlimfzMxHMwx4fO8bokcOBDq-mwkpoViGQpcB4LOotJX-uUnlNoIwx1qHfvPcPDOtG3Pw8zVU37yEcDW7vXSKi5hgnM8AQzEK_vnoG6SFjgL6OV4HpO1WhsJZi2u94bARe_JFKLvJ-UgXjju4n7u56Fx1-L99nN12S3xye7Q6wwQRr5fKS062QrNxZd_th0JEe_UaD-uik4_K0YKlNmc4GXo3A2U0QnmJGAFwfh49-Spc_XW1vBZUtkX2sLq09I7EkyTWjMaAe4l2cmfaKYUECPfwmYCl5tfESNjKJjogO5cyM8hoeEg1zZXL-DYQfL7qEjr6fPoRU3JIMPx1eTQByZnrH80BRzXNuLXlm-QOzI21e1aComwTycfQCuG94_aT87IFLTsI-I2Xijvy2XD4bB_8MP42EdN2QvR5s3GxzgOc7FROhgJ7zTY059NnxgSDcP9QRiVmE8rB3ECjMiK5Ev1_Dat0QbDJm0S3eRT7v6Add7G9M1wcP8X8eb92sQnNVunVgACPfABwuyEb4oyOzfc70EnkZxqPgxmOKfemdtd8fQDmuwI6xV_A83YXsL5rF_t-dnLX2zDAOXz6-3YNydDnVgGKzrCEd7RvXKdCBsT1-5QGJO0WSwtTi2CzYDNa-fpEaH9AO4XZBj_7Uvu2rpM9tLD9EB2xSn7w-zA7DE0aLlQFQcswS3iz6NxljIND9PwehO6qUEZK0c5i_ii1UTmySCw3jz3NXIF2tpi8PmSQsvm4OZaUcsA-tX8ze0lNHaweDU6MPMx2PW4Va88OC_u-mENlqx6OClVD5zQvNtm69AlhfwZyQtIPOPscuDlv0_r1P7dfl7EHcD29uXhKjhThEACBxbtAv75kleVFTs09cBdJ4iTSwo4XRmHya3YaffoMb78N_MPSTzF41rj54pO3OL313Z55DT79dPAxBsOZaNYMx8Yzjfs2Y5Kqx0tJMPwXR2WnEAcDHInvuyu60fo-ACfygHpDEoO7_pV9f66VtnS__N0YsAI9PDI4cQWN1WwejgkEPkE_dOWV5YpLhT3_Vkvq4t3DQlFIqTyk_ds-80EmNEC0C1VBd_sU_3Rq3Phw_PyWFH6MezP5uzLNypUoEE0Ly_vGd7mkVKDLxsT5Pt5K425SyQGeQSZ75zzVNH0FLfzIPsBdR_z0ELFxbp3-tnT-lVswhP38Nj-4RA2VIVPEyUL5RDZzoBksg4gC-DHYw6TknkOHnICm9yN60TY-xSSwRLVEkId6uNr49-zQfzVz8h7U-Asx_P11uc6GHewaD4PL-wL4c-MfoUKLgXD7lAGtLddKRdCFaHMisFU9dMDktYi1BZQHsHhZejZrEbU4_jvTkvCLd3M-ePWOxhXs1okOTjwBPHRvl2KLCAG78FNBZ6ZaTcpTjGD_JD4QOvrFqHzO9M-SgjE5EDr5o9Q8ef-0GVL8AzPwtngyj43aLxBNDEf5Dfz0bdzsTEJBMvhaDGpul8rAH84p_2Q0Hny1jCt_iTJEXAjy81g9MC3YM3D0s99bfUp78bNxu44Omewdj0YDcE1zP6Yc6MINynI7kYNvrVrMixdDKvLkdRg_fIsscw8wyBjHe3Re_fHi1Hbw_fZXGnfI9rw2cf6GTdmvU0aIw7oAvDKrFOMKRQv8cdLEaqrZDU-TSGc8aDpZvHJPpP0Au0CThzC5FjX5JxQzcP8-0RS4zXD1e3C0Q4pbrNKPioSyg_F-Z1UgBw2JcrFTgeail4vAlEWt_ix-FTvxBOFwwDpMGMC2eRp9-qiR9zp0NtiQf8C3OnG0c0rD1i-QzoaLMgu-e2zW78vNwjk5XkfkrFlOD1CDYj0g-595_E2hdYAwiteG9zIe9L6tkjS5trMWlnJCuHG9szQNShVrns0ATztKNnes0mJAgwI1OdDH6qxThU0cDqc0bzSfv7JG6P1BNkxbwXv0Hf0-JxI_MTE0XB-9z3ywerA9B4TUINvNyMXyyfw7LtVgAM8AsT8aS6wiHwYA0cmrMGk92vv3haH1xLrDm844uJf1-acY_TExc9lbfgs98TV--kRFkmlcBcQHeo6xMyMWaUbCj3v4VIKrJ97OSV_F6HaoNZg5tojl84CzQ9PPfjeXO7YkU7V09nuXk31AvjA_tvkMh5KmXQkBgvmC-bFm06yIhskycRYKpqsYiomTQaf4ovaaNz4Mo3UJtAdYTzH_kfh0JlLyPHX5XZs9Tfv0cvH4yc-a4F8BiIO0TT47IRtgRQ8LvPDeT-ejV0JBE82p92e-kLF2B-9zzjgMFMZ3c501dC_Tv3q7Ndkfcco5cTL_uoLJkeQVyMiHvEvxM2jeqYoLyjL9GkZs7tKKSZuGInXqMNC-vIhrMk6yhJtBvr5U-ntnlbi1sL5Z1TaJMbg9MzpBTBPlH8YBB_iB9zGok-DODMj1f1BDa2UXBY3VhSh0K_pYOfOIYPRMugqRhnzzGHA7YpU1szsy19q5TXY6PXH2gYoW7V4ODAv6zHEz7w"
              genres={[
                { name: "фэнтези" },
                { name: "семейный" },
                { name: "приключения" },
                { name: "драма" },
              ]}
              handleClick={() => navigate(`/${index}`)}
            />
          </Grid>
        </>
      ))}
    </Grid>
  );
};
