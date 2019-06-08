import { Injectable } from '@angular/core';
import { TrainingElement } from '../models/training-element.model';
import { UniversityStudy } from '../training-university/university-study.model';
import { Course } from '../training-courses/course.model';


@Injectable({
  providedIn: 'root'
})
export class TrainingService {

    trainingList = [
        new TrainingElement('University', 'university'),
        new TrainingElement('Courses', 'courses')
    ]

    universityStudies = [
        new UniversityStudy(
            'Universidad Oberta de Cataluña - UOC',
            'Computer Engineer',
            7.9,
            'The itinerary chosen was computation and my Bachelor final project was about Predictive Analysis, the models and techniques used, the applications of it and I did an analysis on two Open Source tools, R and Weka.',
            'http://hdl.handle.net/10609/59565',
            new Date('01/02/2014'),
            new Date('01/02/2017'),
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXUAAACHCAMAAADeDjlcAAAA/1BMVEX///8B7v8AAHwA7v8V7/4A7f+/+P6v+P8AAHkAAHDV+/8AAHEAAHb///0o7/8AAGwA+P8B8/8Brc0A4/QAwdz5+/4B+/8AHYAB9v8LGoAARZQAe60AtdIAdKkAP48AAGefn8JfX5yxsc7e3+uf9v+qqsvR0eY7OosAAGLv8PeBgbBPUpWYmL7Dw9wwMYZ7eaxd8P5LSZDU1OTj4+0SEX1sbKKMi7QBWJwB1OkBircAAFsfIXy5udIBJoQBnME8OYwATJU7PIYBoMJbW5gXGHWUlLRmZ54BZqFLTJAoJoYBr9AIYqQBV54DYpwByeABhbICMoUAAFBHSIZJSZUBLIS91KdwAAAa5ElEQVR4nO2dC3vaOLOADXa+I63kI1xih3TTmsByMWDYcGtSaBqahqbtbrpn2///W45Gsg1YIoEEEvI9md0G8BVej0ej0Whs2LZtgEQvC6JZtGSpbu+tiG3bi+eyH+3UGxLxA34zLSHOPjlMCclbWlE2pN8c/ZZbkfTP+MN8xJNvQMw/OfWMycUynX2GUsLylqmK5eBsakP8ytFsuCX537Su/7H3eCd/uFim9afBdd3MgFj7OJsSTj2jEUfZkFPXbbgV4dRTd+wfe4928g2IlXmh/vjyQv0p5IX6EwgnKlrTF+qPKYL6f4GuG8+KOoe99zi6bm70ayu6/tv/PDP5z/O3MM+ubyo699uibsZ/93i/t+AUuDgO78JmHqj7qq4/DboHyBapZ6DPy3l7hfz+t0/nZ1zOXx2d5j3PsR7CXbXrz1G2RX0vYzqedXP2GmFMCBVC+NvD759OCwXr3txfqN9C3TSd3P4XiilCqY0RYb/O8jlLeFHPhfqmz7kN6qa553jffjGFeAKe/H3q3c/Q3Js67HbfltdO/mxItkPd2z/AKLsEOnBH7Eum8LjUuz+nwb325ddqOBnf76xLZBvULecLWwo8Foq/3UfdNdS73W65XOZ/OKAefOh2dXjbFA/vCWnMEAs4/Nsu2lou7Oapm4X8B5pdZl3md3uTW79VVT1Hu4MZb6f9UYV/Ko18TNikqyFQo7i1Opf5MxihT3Eg3y7b5JaVGtk4dbNww43LKtSz5MJZu0XV+usDmqXl6HOXkkD7S8vThns/C2MYV8ehfN/o9LSbBJ3OU1Ln0O+2LrHQ12v7kFq7XiHoZ/SjbeO6bQhbAHf8nA7GBiDdqtqKnsot5N7SrCS7ln1WNlKbirOFjK1zSTdM3XROV4eeRfRdbk1t11PHqJl8aLZjmNHI9mw8fjbUbUcXxbZj7NEO0eZzqKNNxL4hweX42HPYbaNFcepqPiZ1yzlAMKy6Knfyw1tP2Zfpepq6EYSVnm10G9OrnmTjVitdWzS30PDadpW/BrCq3Dq+HEoVdsulEl9VGsIFKQ0up62xCyh7pQqocnCNSNgrl6Gx7lUGzWkxMmblEcJlvsJ9AupmxvS+qP2i2wSxfWetyMwS6jRNvUlwfWx06pgS1oUFA4L9FkdZx5hR/sadMlwPOd1B/bgbjmCdXeWt8mcjqLEJtA903C369Qp3jA4JZpxv6PPfRvhuJcO49Elr3PBxBfS9yLiXzDB+X11R2TdK3XL28UrtaMwcjEyB77d56mWEcHV6OGxNEBILglGWcLJGB2VPpN0osiJffoIHfGlA2RjcIcI3rlFWMwKM4Ubo+Zyw3cKICq1uULAwfEMXt12+ukL5JYWbYYLAwqzcoG7UwuwV+mgd6oCdnOW2oOucKaE/hX/eRoKUMcYEPMce14tAGOnpAd9sSJjgeUxHwAyjnyU8DMtGi2TF0YoVWNwW1G2gLm4c2yXCbgWUDsQV5NTdJ6JuOZ+UdXcLtdZpUFfVdd7C0oZQwyHFJVgQMkHduBSf+RowKgFB14bkKejzG6Mp+A4oEXeEW4bzndBY10lE/UoS7tO+OFtNUl9VNqrrOY2eyyUIUf0tgBBX9i3YdU6dyF58MUW9ylANuI59MNWEyq5Ti/pV/kKzRDrkDcQvmnRg+KdrtEjdiP2VQ0Qj6uypqDtHWlVHjNF/Lt5+oIxoya+l7OtQF7CNUkIdGlH+3wHiZsI2LqdgYCi6bnT4f23/vaCODqQSV/0sPWx1I7oa6kKCfkL9qXTdzP2lUWjEvuzveSC500+/sHo3IHK0xgDgcs8xXp6mXiFz1KNrxDuSQb0rMNJhGIkrqB+KbbjJYfz+xKOxOO6JQt023LDTP6FPrutWHqfDjNzRepv3LMs0IRnRKuS+EY2uv/MeSL1E0CSh/rN2B3WXmxHXqPRBjTnGSnwUO6IedTjDGuH3JvdzbB11o4VJJTC+Pjn1wiucTWOn3yHCZUK/34LUytwpWdR2/gmRNUyMlnoXo69JRKA9naduK9SFJ1IxJsI5aRE6nHX456lDR6g4opJmmrptNMF13AW77n1Xrcc/hRS0wo2vKDv0lFblrqEO3naWxD37gER2BGO9rtt2maF2wES/NBR3yeyQMfU4OHOChKt4nfIc4aAiHjajjp8k+mVmrL7K81QJoXtvFONP1/BidLpugzfYjWiF9fIi9VLawnBFRXTQkdcIZ1nZWKQu5KonFo7JHPU5CzOlIgzGL7ekPkFPE/0yrVPVrP/lZcxFoJaVV0w7er16MEY/ltRl0FsRRD82ZehKWBhwWdLUIYjFsgIa37BDY/cngM6moA4HGnbE6xhTN6IullJaEsunCDqlcCAqNv8Jn1fX9pi6syp1S6GOBHXLOUrhRFms8U72vAvFENGCeQt2U0R44gwb/QjeEOOxYNxhPelic0BFsapFpc3hTW4ndrPbvG8kj+OOEL2uGnav1eerXJwVpsQ2Wkx4+01fmP+vCNx4Thmjw67hjiHKyZuPoNaUkQDoyp70jCBck7q1r6jgqtQjXS+cpY+A2J56BKtwrjvTcup7cB9FktnTU4egSn0QViujflmAHU/qPqv/Gxrhv/BmMu7yV7/eHsoAb/H/xnHrG5wwCoGrWmC4Hd9nfn0y5OpdYvVppVgD6O4Q88X+tGpDI8o3fs/dniYm/Wa9G/r06zDgXdgRpZjVq+tSv7m3rkuVNr3vaYONPugshxKB5+7ZjaOjborT5TzP2cufnp7m83nH8wpaXedqWulcXnakwvMGsyqknLzpydcwclCS4CB/rQ6nxw3QUrcaiThGtXJVDEUMPloqbqLS4HgoQjD8TYPrf+m4UwKL7han01awaoA9oX6qUj/VUs8rTgjehw29f9I9IPpFR93K07T9J9/01LmDn98/+/5Pn0ih/X++n+l/WTJcYaufIroLq239jrOlM3fSnm2ZOt7c/EVbPcYq1PMq9X1dn9E6VaiTG0G9n7bX5KygOUAGBj4WdZ2e6zZ0vNOzt5SRWcSe+/YU3Xvwc4uy7tET6pbSVyeftCzUBgDDTWGqoS/ySavCOfWm+JFLq7npeEcXmKipYwfust+4zk+3l3+8PQFjM9cvoe78Sltl+nsu3XnhnkThnKapI+hbmgVlOXmlywEwvdeKw/5m0WG3MpZ3dIh1sTKg/vwlpp5RHTr0tqBCM3Pv0nTRh4IgpZgocqTTdUtLffEkhfwF0+eO/ZdRz/2u0CSKE8O3dZSuJRLRK2tPR12Fzq/va8XCpKh7R1S5cdaivl0r/nBJqBc+KfaanKupiM43Fe7Zcl2/B3VzzztjShhtLepzWRO7KTF13qFXEllQ1klHUczcBwWHdBw3R917w27JS12Buu1WhpdfP+tTwHZCEl23CmpwnL6BBFAZwBKbWZ7SAY3HgjZE3dzLnd02+KqnDmHZcaXSdaXv7A6587Mk8U7Z9SkmNiXUzdyXRVuKxAA+YBeZE7xXbma8VyoRdCGQbYa6aeZe3Zo8pqEO3Kon/qRz6dOhK2NgMHKxEvWnmUyWUNeMesKAwxvLs6I5XFah8EPjWRDZxdmQrlv52zP2dLpuG0NGIQIb1NgokA53bWVd74b3S2t/iMwsTMZRBpOhL4jf7OdzMOpp7f+gmvE3FIVrNqTrXrrbsAJ1iDh2RfglQJTKRPOPQH0x5VzcBfFwRbLQ7r8vGenNti0zC6PxHcXPpAT3P/zzq08wzaquBQK/0dwY9cK5EqS/i7ptdxm6jHhVCJUDeDVJfS6fdJY/mqTiwqcgHl99TKdnZmF0AbCIMpIZXdqs0ThasxHqlkWX+ozLqMMwG4knsLgsK8fYBPUgLFXdWXSqWyqVI7ZuAIeB6R0lkuxsuHyL6mP0wuaoZ7zvSjTwTkFvPWtT1PntpnGRZqdaQr3HSUe5/JD6BtlDQJ0aLcalLyLpHHyJkuGgPoExpNK077eM4LpeDP7FCB2OPsPkmfIx9o8ndVrZvtLPU7fymnSVO4TdWJlN2XXeYOsSasDKMYYxY3ythnqRZD8nrsiQIiSpfx7izpTv4Y/F5ehAoq4xxqwH84yypGgQiot2dUhoqyuC5w0fxlK7zC9uHfs8dfNWVdMK/RLnsmyA+p5zpHNgKL44O7o5Pb05Orsg9FChPqConXDilwAHwodBA/7RnXDHHbzJCsY9uDSHFBZzs1JpsGaDG6NSPKptDJvC/Byj/taNzDz1jOn8WjcP2rLMjVHXROC44O/5XEEU0XNyXv4LVeLr1wjVEuolgsRAdA1gc8w9gqC1dMW8AsGUwlASo52atEqlpDVtlKMBV9w1tiwp6qfLIyA67OwmiRlsgLp6CG5R2Keo4dgTJsj7pijiz+xcvt2YZMUsgchftwHzVIz1F8X6DoXh7KoPCi3MUkydu53STBUp3uzk0juo87cF7T2+FPr5LPd8A9Sdb6pZx6+8veTCcuqWo9jcE5TMBQO8C9RFDmQNFJgMq2EYVk+oD9QZjeeeJroeT0AS1Lds2H9bzImwcp/YysrOfswlKG6Aeu6N0mGg31M5kJocgeaChaFZUOYZ9ZCgkQu2/3IA0ul0AtB1hbr0LsvF4372cXVdqLu3Inau6Wfe3FjTBqh7SjwTQvyLUU8N9Q7Nfp21pjQrMlRm1HFWUCdJ1oStpQ7Bm+IIX5Vbj2xhJPbcPlk2pLAAhL3yTHOT1C0rbd0Qukin+6q1kHgDOhfpalCYdjRHfYzRBK4M5O4m3VOtrpf7wnV8bLse/a5C/kIMWWqH0FBULpb8yucy80lGKrMlI3gqdSTHTS1lfjAi39LXTaPrAfe+E0XmtEVqNMRhxJYVAr5ikcrOUyQ6XTf6VNwyRfIE1Ln+WrlXIs6lhS550vOctbew515BSf3izJaMVqvUwYFSh6nUlByVug25ihFSm18BkZgIfVOp6wPKQuj78M7TLKqbbk1FvMBH4ihD9CS6zsEXnPND0U/VdRURpmdWwcyYCzMWdTkCSzIz3irZCJCZocs+OFQy23WZ1AE3Ma5EehWlkoKul4U56aNRlKlYNOIZ1YvUYeKMSDmlIqMUZvI+sg+T/Lics/8XxsKTQ1EETLynhF0cObpiF54u8q47eEEJ5tIzfkBTM17+Np0no88uDbGINPI+EcUNSewjoqKewhWVmdKhn5WWpAxmn1OPDU4Xoza/K1w78LMHsGH2Sey6FO4Ye9b+jwvEGCMEiapdjNHXP44sfb00U/FAuOHQTX1R8p2QyHfi3pMy64D7jekSmdpZA0a37zfLhjvGIoYCW9S+Mr9RLg/ro7J0CkuMkv7xMfK7RlBq85/TKcnOKcwtumzWXKODaa00ZAGjtXDLY67LqEOXSZaouzkSJerOPx3d5PlnQK7bZc/7S1HV11rqSkBZTmvP5C6UA7xZRdeFZ1I5wQyPGr3YNhwE5VZzMhmMZRQdBlYbbYK/DgPDDhvD1pCLmEFju50+6Q/BQl2NMJkGRqlPalvW9qXU5W8USl/IFUQ9xturMWoMBNWkMenmR4pG01LsfRayz+6mLshDyFyGAKQk0Zr5CiVBoOxl2zLYLgc9IOrO/fbHjX7pJbIncWress2cdEINEmFgRTy1B8qEf8ipp/34laknFJO39pKERXV4OjWolx7j24asQH2G/7a5cqZ1o4SJpW+SPoii6uiXGAR8iK4bd2eFRgOn6lI7Hl9N/t19qAfKOtTvuCZ5Ne0U5jSmIg6FV6oheuOZD6f+nGRj1M2Mp1Dj2LxFH9O01DxJyP2FjV6o34P6njoxCQK1s6wu+GN579SOV5TbsZPUt3O2zVkYiKOkm0PeoH6CCe2iKYY8JkdxL8X0pczDqScJGHf+5B2oHb5J6oVfmnQZ/Hrf8XIF7n56Xv6caoajo+Sxh1LvFofNWkm/8p7illqdn+2NHlLKBqlnCme6EDHF/Xdn59++nf/+Wpc7xqlHafIPtDCVPqO4uPyXcj+8Ox6HPe0MG72f6U4Zheo8G5dNUoccRW24TBYBX1KXh36Ppsc82MJ0KCku+Zkwbj1g/eNrn9FLdTB66TF7JCoUsFnZJHVTMwSHlsTpZ8K7UhuhbhvjW6gbJQYRX8MdkIVIe7xzV5vzZRsfd17XzbsScrWq/i6elPpw6niOeqrNrDBR5IIv7ZBhjDTZxu7V62V7bmpp8q4WUV+YoTqfK5m6T+Z6Yrc02hulnvF+rDL4t6jqyeSnB8ZhICsjom6nuvW23WNRnU2+SoTW5y6KGNIgpGzM75VQRyT6OFf2NFmy6DgtHDP9HbZGnWNPz+C9Q0SttXjv+1OHwf0wDMIZdSMIw/Ich2Y0QAQsKrIchtsNo4CunRRqlCuqYoXc9SMiUYgsDhS4ccBANMvdMJg7zfxrLwyXltHYKPVMxrlZPbFDUP9nFgy+N3Uo3jhqnNT7SFK3jXKzPh3UR/GYEKj6bEDb5fzt8NJn17g+KQPD8gn/1u1abRTadumkTv+t+8fRVALIUrWN7vVXzOBgzUPEIInMrkyRX+Utic/YgB9iMDk5mYyu+Jk+T05qYztooPqk/R4tSZncMHUT8mnWoE7zs4jaPanz33zpQy2SMctSqetjH3JIe9iPB7FbBI3mQr/8/74oXDokMNJk98JjSishqHiARaN7SaJkR6AuhmazImnVHVB0DAsaOIvLxfftNkGEt84B93VOeqIA5DHhl6Xi/+RXuUyw2nJvg3om92ONDFVyOjfL79663sEfxU1+InSdazqjIk9gQEfRFsdz6WHSPhzKcl8wycAWFiaq4xiIyrFGOW6Ya9JzdA9kqjC/lPQ4OiQt1rhVqnL8/AIVMTqRg1ZDuOIlIqw+1ObUKfuGqUOL+juEcu8yM2IQFp/OD3vcizqYdF+oOLczVFK/RDJPoEjjaukTNJcKKeSjRNSOEni5qy82tQNZSinA9GSeOt9QUudKLam3KFQ95WR/yvKQfTFdge/7Fa5vUYxhQSaxdlRq47qeyXhnt8wXncNOuaabc4Hg++o6V6iqQCp9GDtgUVGpEiGhETM7XhzziFJJr6MnEyTUjcj8H2b7cvw1TT3W9SuKQ2GrhpBWBpdcekm9OtxnUTOdJLVul3pGPkGG3DXpg6/F71KjJPelPonTdyPPMWR0WoYi68MknyhNPXH6mmiRejKbZkTvoN6issodVLiqwn6Q1gqZaH5g2/GEqPDRqEP2v/XlLnWn9FU6vaNwP+puVkz8MhJ/vURR7fKyyf87voyqL3ILcz2HPHotF49RNkVdHLF71UQoLnt8J3WCq3IBghq008v4DMG40UaPR52Ld3PBlneYECU/LKXCWk6ZM5CuYKKnnkzojahXKJ09LEZufUzniptKdQ6G/VGxl9Z1iNd0yKTSG2XXpR7QrN+zbSbnQRnjE9YJS+RRqZuOd/OFYV3AC1GGzq2cZS0Wu7f2csqAB/2+iq4jhHuLui5mwcjuoxGRyX5O4iw2eHgh8WHb6zR1oyjjNZ9X13UqqIOBpx2jWxfWy70WruNjWhiQPdPynG9fDjGjFMVCKWHk7dmNV8hoHsCrxs7Q61V8mHYWh/PUq362vRiHsct+dmZBugOYtwepYfacXcei0Do0CmIO3mFE/SONqVPhcgZkCXVRkRMHQ1lX8pJS+Y0elzoM6VkOPGfz/M1fb38dHBx8+PX6+4/zGytX0D4SzDQLZ0qRvAMlPVXzvKQpQkOBP/JhbIxwL7UNd+8Sq9NoiCYwlDBnui4OPKUMbpygv2BhwMXEIlemh5G2NZVhBTK8rkI7GkSPVyk9sq7Lw4r8sZwnnijL3+RgWteeteSUBbU0hKYukOrDjHE08yuOfvH+40BEFGcBwS7LHkTqH7ChmDETQt4Xmem6fJ5YE/lggLp4ZmHEYSKvHKaeKXZd5nHbkFAs97J70aOElkX8t6fra4u1rwQToFLkXXM1eAeF98Y5u+5BNMMXbvUreON2kmrpQxwHeE9gowqGBF4OPyvLDRQJ1CI1XKNBhIVpxgV4a1B32QA9Rh+7Qfi50kYnM+q21PU4ytWJvoAti40bPZqNOnA7TF2NzqO/vfRcEk1EoMxbbfaV1nnbhScQb+oSStCg8/N98rhB6CYyeJpatU0YJ+MeUtwYDy4hfbos1BTRdufyGCwIGY4nVy1CW2W7yy8CnkJRjR7jjTZ7f2VQ3joN3V6F+2ETviIYU0prY+lEBQxHbXKLoVqp4pcP6VfYO/2dd4h6xksXteb91xXmJXGdGvQxafZ67ctGcWwLt/Arb7eb3bkQuxE0RowS3J6KEhnBMWUQmppiXIPNyicU9+ERJd0T4nOz4F4Tch3A5LFOZzDmd0O3Rkibe4WTZqdVsq8GjUaDrzCuBh14U5TnGLTjqHrxgPm1sjFGuK950uROUf+iTjz43VvIrDQ5dV04yZ0ljkargyBQbu0gmMsvDUQBhyjj1Jaf7eSNbQTpIb1gFknXR815b6y4+I24C6nNyd4l6kp+ahZGVQuL1C3dL7YXXm6VGJu9uGDxMLZSRybW4VtOAbXfFyv1Lk2Y3CXqmqq1EAz2YqdHpOWd6ivGrlq+y176IV5gR7yU1bMUVO35YT7IcH7Y8JbNd4q6WmAZ/Jgzx3NkIXAn55zT3ayiaXdLJ6y/6ta7RF03Hwzmz6Dfj/IWB58/+v2QqDUzdkC4Ro8wpb2VbJyxW9StjObpDyKSgKH6FXc6+PudrBgL1Glj9clMu0QdCmjeltkhxp92kvpsNGQ12SXqZgYedaIW/0ZJ9pi2FtIOyFxVt5Vkl6jDjLC70ph2k/q6slvU9yx1hvYL9a2L6ezfnsb0Qn0LAqmStz6Z9oX6diR3a1XJF+rbEcu5uK2U5gv17YiVe7cc+wv1bYl1S/bYC/UtCUyzvjlYou4v1LcojnPGtLPHXqhvU6xc/ozOHg2G4r8v1Lco4tniztHf8jF4c4GYRyhd/Aiyo9RBzIzjWTdn338RimG+KoY6ZB/+dndgRvpDZYepi0wmK+flrNPT/SMu+6d5/nHrxVseQXaZuhicBlsDg3cg/PWlUsnji/lSH+ZJ5IX6U8gL9aeQF+pPIS/Un0I0swaeoTx/6r/957mJ/V9A/Y+9ZyZ/Pn9dtzn1TPLY2+hf6uOq/x5hF8vKWP8F1A1B/fnIC/WnkBfqTyER9fg7754N1O6mp/5s7Dq8SF1/XqKh/tRfaT3JCF2/pab6LopK/am/0Zpi/mkbz25gJp2y/Bx/wP8DXOFKV7whFvEAAAAASUVORK5CYII='
        ),
        new UniversityStudy(
            'La Laguna - ULL',
            'Technical Architect',
            8.0,
            'My Bachelor final project obtained a distinction from the Colegio Oficial de Aparejadores, Arquitecto Técnicos e Ingenieros de Edificación de Santa Cruz de Tenerife, and it was qualified with honors.The project was about the design of a 4 floors building with commercial premises and households in the upper floors.',
            '',
            new Date('01/02/2004'),
            new Date('01/03/2010'),
            'https://www.ull.es/portal/noticias/wp-content/uploads/sites/13/2018/06/ull_color_horizontal.jpg'
        )
    ]

    coursesList = [
        new Course(
            'Coursera',
            'Elastic Cloud Infrastructure: Containers and Services',
            'I participated in a Google Cloud Training for Google Partners',
            'https://www.coursera.org/account/accomplishments/certificate/4QHW3NXDG64T',
            'http://68.media.tumblr.com/92a71d62ace9940f8ddd540400444fc4/tumblr_inline_mppo32jFBC1qz4rgp.png'
        ),
        new Course(
            'Coursera',
            'Reliable Cloud Infrastructure: Design and Process',
            'I participated in a Google Cloud Training for Google Partners',
            'https://www.coursera.org/account/accomplishments/certificate/UVVELRJU5A32',
            'http://68.media.tumblr.com/92a71d62ace9940f8ddd540400444fc4/tumblr_inline_mppo32jFBC1qz4rgp.png'
        ),
        new Course(
            'Scrum Manager',
            'Scrum Manager',
            'I obtained an expert level',
            'https://drive.google.com/file/d/0Bz02AoaiYQUjQ2JFNnhEOVdKdlNBaVVlUXJ0TEdIb2VJRElR/view',
            'https://coalagroup.com/wp-content/uploads/2016/10/logoscrum.png'
        )
    ]

    constructor() { }

    getTrainingElements(): TrainingElement[] {
        return this.trainingList;
    }

    getUniversityStudies(): UniversityStudy[] {
        return this.universityStudies;
    }

    getCourses(): Course[] {
        return this.coursesList;
    }
}
